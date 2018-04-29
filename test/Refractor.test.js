const React = require('react')
const ReactDOM = require('react-dom/server')
const js = require('refractor/lang/javascript')
const haml = require('refractor/lang/haml')
const Refractor = require('../src/Refractor')

beforeAll(() => {
  Refractor.registerLanguage(js)
  Refractor.registerLanguage(haml)
})

test('should render empty if no code is given', () => {
  expect(render({value: '', language: 'js'}, {withWrapper: true})).toBe(
    '<pre class="refractor"><code class="language-js"></code></pre>'
  )
})

test('should render simple JS snippet correct', () => {
  expect(render({value: '"use strict";', language: 'js'}, {withWrapper: true})).toBe(
    '<pre class="refractor">' +
      '<code class="language-js">' +
      '<span class="token string">&quot;use strict&quot;</span>' +
      '<span class="token punctuation">;</span>' +
      '</code>' +
      '</pre>'
  )
})

test('should use the specified language', () => {
  expect(render({value: '', language: 'haml'}, {withWrapper: true})).toBe(
    '<pre class="refractor"><code class="language-haml"></code></pre>'
  )
})

test('should be able to render inline', () => {
  expect(
    render(
      {value: 'var foo = "bar"', language: 'js', inline: true, className: 'moop'},
      {withWrapper: true}
    )
  ).toMatchSnapshot()
})

test('should be able to highlight specific lines with markers', () => {
  const language = 'javascript'
  const code = '{\n  title: "Sanity",\n  url: "https://sanity.io/"\n}\n'
  const markers = [2, {line: 3, className: 'url'}]
  expect(render({value: code, markers, language}, {withWrapper: true})).toMatchSnapshot()
})

function render(props, options) {
  const opts = options || {}
  const html = opts.reactAttrs
    ? ReactDOM.renderToString(React.createElement(Refractor, props))
    : ReactDOM.renderToStaticMarkup(React.createElement(Refractor, props))

  if (!opts.withWrapper) {
    return html.replace(/.*?<code.*?>([\s\S]*)<\/code>.*/g, '$1')
  }

  return html
}
