import {type ComponentType, type ReactNode} from 'react'

/**
 * @public
 */
export interface RefractorProps {
  /**
   * The code value to highlight
   */
  value: string

  /**
   * The language code/name to use for highlighting, eg `php`, `css`, `html` etc
   */
  language: string

  /**
   * Class name for the outer `<pre>` element, defaults to `refractor`
   * Note: this is not used when `inline` is `true`.
   */
  className?: string

  /**
   * If `true`, the code will not be highlighted - instead it will be rendered as plain text.
   */
  plainText?: boolean

  /**
   * If `true`, the code will be rendered inline, eg not wrapped in a `<pre>` element.
   */
  inline?: boolean

  /**
   * An array of markers to highlight in the code.
   */
  markers?: (Marker | number)[]
}

/**
 * @public
 */
export interface MarkerProps {
  className: string
  markers: (Marker | number)[]
  children?: ReactNode
}

/**
 * @public
 */
export interface Marker {
  line: number
  className?: string
  component?: ReactNode | ComponentType<MarkerProps>
}

/**
 * @internal
 */
export type ReactRefractorMarkerData =
  | ReactRefractorMarkerDataBase
  | ReactRefractorMarkerDataWithComponent

/**
 * @internal
 */
export interface ReactRefractorMarkerDataBase {
  lineStart: number
  lineEnd: number
  isMarker: boolean
}

/**
 * @internal
 */
export interface ReactRefractorMarkerDataWithComponent extends ReactRefractorMarkerDataBase {
  component: ComponentType<MarkerProps>
  markerProperties: {markers: (Marker | number)[]}
}
