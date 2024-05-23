const React = require('react')
const fract = require('refractor/core.js')
const mapChildren = require('./mapChildren')
const addMarkers = require('./addMarkers')

// eslint-disable-next-line id-length
const h = React.createElement

function Refractor(props) {
  if (process.env.NODE_ENV !== 'production') {
    if (!fract.registered(props.language)) {
      // eslint-disable-next-line no-console
      console.warn(
        `No language definitions for "${props.language}" seems to be registered, did you forget to call \`Refractor.registerLanguage()\`?`
      )
    }
  }

  const langClassName = `language-${props.language}`
  const codeProps = {className: langClassName}
  const preProps = {
    className: [props.className || 'refractor', langClassName].filter(Boolean).join(' '),
  }

  if (props.inline) {
    codeProps.style = {display: 'inline'}
    codeProps.className = props.className || 'refractor'
  }

  let ast = fract.highlight(props.value, props.language)
  if (props.markers && props.markers.length > 0) {
    ast = addMarkers(ast, {markers: props.markers})
  }

  const value = ast.length === 0 ? props.value : ast.map(mapChildren.depth(0))

  const code = h('code', codeProps, value)
  return props.inline ? code : h('pre', preProps, code)
}

Refractor.registerLanguage = (lang) => fract.register(lang)
Refractor.hasLanguage = (lang) => fract.registered(lang)

module.exports = Refractor
