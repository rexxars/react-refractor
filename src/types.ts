import {type ComponentType, type ReactNode} from 'react'

/**
 * @public
 */
export interface RefractorProps {
  value: string
  language: string
  className?: string
  inline?: boolean
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
