import type {
  ElementContent,
  Node,
  Parent,
  Element as RefractorElement,
  Root as RefractorRoot,
  RootContent,
  Text,
} from 'hast'
import {filter} from 'unist-util-filter'
import {visitParents} from 'unist-util-visit-parents'

import type {Marker} from './types.js'

export function addMarkers(
  ast: RefractorRoot,
  options: {markers: (Marker | number)[]},
): RefractorRoot {
  const markers = options.markers
    .map((marker) => (typeof marker === 'number' ? {line: marker} : marker))
    .sort((nodeA, nodeB) => nodeA.line - nodeB.line)

  const numbered = lineNumberify(ast.children).nodes
  if (markers.length === 0 || numbered.length === 0) {
    return {...ast, children: numbered}
  }

  return wrapLines(numbered, markers, options)
}

function lineNumberify(ast: RootContent[], context = {lineNumber: 1}) {
  const resultNodes: ElementContent[] = []
  return ast.reduce(
    (result, node) => {
      if (node.type === 'doctype') {
        return result // Doctypes are not relevant for line numbers
      }

      const lineStart = context.lineNumber

      if (node.type === 'text') {
        if (node.value.indexOf('\n') === -1) {
          setLineInfo(node, lineStart, lineStart)
          result.nodes.push(node)
          return result
        }

        const lines = node.value.split('\n')
        for (let i = 0; i < lines.length; i++) {
          const lineNum = i === 0 ? context.lineNumber : ++context.lineNumber
          const text: Text = {
            type: 'text',
            value: i === lines.length - 1 ? lines[i] : `${lines[i]}\n`,
          }
          const withLineInfo = setLineInfo(text, lineNum, lineNum)
          result.nodes.push(withLineInfo)
        }

        result.lineNumber = context.lineNumber
        return result
      }

      if (node.type === 'element' && node.children) {
        const processed = lineNumberify(node.children, context)
        const firstChild = processed.nodes.find(isElementOrText)
        const lastChild = processed.nodes.findLast(isElementOrText)
        setLineInfo(
          node,
          firstChild ? getLineStart(firstChild, lineStart) : lineStart,
          lastChild ? getLineEnd(lastChild, lineStart) : lineStart,
        )
        node.children = processed.nodes
        result.lineNumber = processed.lineNumber
        result.nodes.push(node)
        return result
      }

      result.nodes.push(node)
      return result
    },
    {nodes: resultNodes, lineNumber: context.lineNumber},
  )
}

function isElementOrText(node: RootContent | Node): node is RefractorElement | Text {
  return node.type === 'element' || node.type === 'text'
}

function getLineStart(node: Node, fallbackLineStart = 1) {
  return node.data && typeof node.data.lineStart === 'number'
    ? node.data.lineStart
    : fallbackLineStart
}

function getLineEnd(node: Node, fallbackLineEnd = 1) {
  return node.data && typeof node.data.lineEnd === 'number' ? node.data.lineEnd : fallbackLineEnd
}

function setLineInfo<T extends RefractorElement | Text | Parent>(
  node: T,
  lineStart: number,
  lineEnd: number,
): T {
  if (!node.data) {
    node.data = {}
  }

  node.data.lineStart = lineStart
  node.data.lineEnd = lineEnd
  return node
}

function unwrapLine(markerLine: number, nodes: RootContent[]) {
  const tree: RefractorRoot = {type: 'root', children: nodes}

  const headMap = new WeakMap()
  const lineMap = new WeakMap()
  const tailMap = new WeakMap()
  const cloned: Node[] = []

  function addCopy(
    map: WeakMap<object, any>,
    node: Text,
    ancestors: Array<RefractorRoot | RefractorElement>,
  ) {
    cloned.push(node)

    ancestors.forEach((ancestor) => {
      if (!map.has(ancestor)) {
        map.set(ancestor, Object.assign({}, ancestor, {children: []}))

        if (ancestor !== tree) {
          cloned.push(ancestor)
        }
      }
    })

    let i = ancestors.length
    while (i--) {
      const ancestor = map.get(ancestors[i])
      if (!ancestor || !('children' in ancestor)) {
        continue
      }

      const child = ancestors[i + 1]
      const leaf = map.get(child) || node
      if (ancestor.children.indexOf(leaf) === -1) {
        ancestor.children.push(leaf)
      }
    }
  }

  visitParents(tree, (node, ancestors) => {
    if ('children' in node || !isElementOrText(node)) {
      return
    }

    // These nodes are on previous lines, but nested within the same structure
    if (getLineStart(node) < markerLine) {
      addCopy(headMap, node, ancestors)
      return
    }

    // These nodes are on the target line
    if (getLineStart(node) === markerLine) {
      addCopy(lineMap, node, ancestors)
      return
    }

    // If we have shared ancestors with some of the cloned elements,
    // create another tree of the remaining nodes
    if (getLineEnd(node) > markerLine && cloned.some((clone) => ancestors.includes(clone as any))) {
      addCopy(tailMap, node, ancestors)
    }
  })

  // Get the remaining nodes - the ones who were not part of the same tree
  const filtered = filter(tree, (node) => cloned.indexOf(node as any) === -1)
  const getChildren = (map: WeakMap<Node, Parent>) => {
    const rootNode = map.get(tree)
    if (!rootNode) {
      return []
    }

    visitParents(rootNode, (leaf, ancestors) => {
      if (isElementOrText(leaf) && 'children' in leaf) {
        setLineInfo(leaf, 0, 0)
        return
      }

      ancestors.forEach((ancestor) => {
        setLineInfo(
          ancestor,
          Math.max(getLineStart(ancestor), getLineStart(leaf)),
          Math.max(getLineEnd(ancestor), getLineEnd(leaf)),
        )
      })
    })

    return rootNode.children
  }

  const merged = [
    ...getChildren(headMap),
    ...getChildren(lineMap),
    ...getChildren(tailMap),
    ...(filtered ? filtered.children : []),
  ]

  return merged
}

function wrapBatch(
  children: Array<ElementContent>,
  marker: Marker,
  options: {markers: (Marker | number)[]},
): RefractorElement {
  const className = marker.className || 'refractor-marker'
  const baseData: RefractorElement['data'] = {
    lineStart: marker.line,
    lineEnd: getLineEnd(children[children.length - 1]),
    isMarker: true,
  }
  return {
    type: 'element',
    tagName: 'div',
    data: marker.component
      ? {...baseData, component: marker.component, markerProperties: options}
      : baseData,
    properties: {className},
    children,
  }
}

function wrapLines(
  treeNodes: RootContent[],
  markers: Marker[],
  options: {markers: (Marker | number)[]},
): RefractorRoot {
  const ast: Array<RootContent> = markers.reduce(
    (acc, marker) => unwrapLine(marker.line, acc),
    treeNodes,
  )
  const wrapped: Array<RootContent> = []

  // Note: Markers are already sorted by line number (ascending)
  let astIndex: number = 0
  for (let m = 0; m < markers.length; m++) {
    const marker = markers[m]

    // Start by eating all AST nodes with line numbers up to the given marker
    for (let node = ast[astIndex]; node && getLineEnd(node) < marker.line; node = ast[++astIndex]) {
      wrapped.push(node)
    }

    // Now proceed to find all _contiguous_ nodes on the same line
    const batch: Array<ElementContent> = []
    for (
      let node = ast[astIndex];
      node && getLineEnd(node) === marker.line;
      node = ast[++astIndex]
    ) {
      if (node.type !== 'doctype') {
        batch.push(node)
      }
    }

    // Now add that batch, if we have anything
    if (batch.length > 0) {
      wrapped.push(wrapBatch(batch, marker, options))
    }
  }

  // Now add the remaining AST nodes
  while (astIndex < ast.length) {
    wrapped.push(ast[astIndex++])
  }

  return {type: 'root', children: wrapped}
}
