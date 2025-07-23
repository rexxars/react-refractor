import type {HTMLAttributes} from 'react'
import type {Syntax} from 'refractor'
import {refractor as fract} from 'refractor/core'
import {addMarkers} from './addMarkers.js'
import {mapWithDepth} from './mapChildren.js'
import type {RefractorProps} from './types.js'

const DEFAULT_CLASSNAME = 'refractor'

/**
 * @public
 */
export function Refractor(props: RefractorProps) {
  const className = props.className || DEFAULT_CLASSNAME
  const langClassName = `language-${props.language}`
  const codeProps: HTMLAttributes<HTMLElement> = {className: langClassName}
  const preClass = [className, langClassName].filter(Boolean).join(' ')

  if (props.inline) {
    codeProps.style = {display: 'inline'}
    codeProps.className = className
  }

  if (props.plainText) {
    const code = <code {...codeProps}>{props.value}</code>
    return props.inline ? code : <pre className={preClass}>{code}</pre>
  }

  let ast = fract.highlight(props.value, props.language)
  if (props.markers && props.markers.length > 0) {
    ast = addMarkers(ast, {markers: props.markers})
  }

  const value = ast.children.length === 0 ? props.value : ast.children.map(mapWithDepth(0))

  const code = <code {...codeProps}>{value}</code>
  return props.inline ? code : <pre className={preClass}>{code}</pre>
}

/**
 * @public
 */
export const registerLanguage = (lang: Syntax) => fract.register(lang)

/**
 * @public
 */
export const hasLanguage = (lang: string) => fract.registered(lang)
