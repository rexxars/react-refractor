import * as React from 'react'

declare function Refractor(props: Refractor.Props): JSX.Element
declare namespace Refractor {
  export interface MarkerProps {
    className: string
    markers: (Marker | number)[]
    children?: React.ReactNode
  }

  export interface Marker {
    line: number
    className?: string
    component?: string | React.FunctionComponent<MarkerProps> | React.ComponentClass<MarkerProps>
  }

  export interface Props {
    value: string
    language: string
    className?: string
    inline?: boolean
    markers?: (Marker | number)[]
  }

  var registerLanguage: (lang: string) => void
  var hasLanguage: (lang: string) => boolean
}

export = Refractor
