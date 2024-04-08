import {createElement, type JSXElementConstructor, type ReactElement} from 'react'
import type {RefractorElement, Text} from 'refractor'
import type {ReactRefractorMarkerDataWithComponent} from './types.js'

/**
 * @internal
 */
export function mapWithDepth(
  depth: number,
): (
  child: RefractorElement | Text,
  i: number,
) => string | ReactElement<any, string | JSXElementConstructor<any>> {
  return function mapChildrenWithDepth(child: RefractorElement | Text, i: number) {
    return mapChild(child, i, depth)
  }
}

function mapChild(child: RefractorElement | Text, i: number, depth: number): string | ReactElement {
  if (!('tagName' in child)) {
    return child.value
  }

  let className = ''
  if (typeof child.properties !== 'undefined') {
    className = Array.isArray(child.properties.className)
      ? child.properties.className.join(' ')
      : `${child.properties.className}`
  }

  const key = `fract-${depth}-${i}`
  const children = child.children && child.children.map(mapWithDepth(depth + 1))

  if (!isReactRefractorMarkerDataWithComponent(child.data)) {
    return createElement(child.tagName, {key, className}, children)
  }

  return createElement(
    child.data.component,
    {key, ...child.properties, ...child.data.markerProperties, className},
    children,
  )
}

function isReactRefractorMarkerDataWithComponent(
  data: unknown,
): data is ReactRefractorMarkerDataWithComponent {
  return (
    typeof data === 'object' && data !== null && 'component' in data && 'markerProperties' in data
  )
}
