import ReactDOM from 'react-dom/server'
import haml from 'refractor/haml'
import js from 'refractor/javascript'
import {beforeAll, expect, test} from 'vitest'

import {Refractor, RefractorProps, registerLanguage} from '../src'
import {createElement} from 'react'

beforeAll(() => {
  registerLanguage(js)
  registerLanguage(haml)
})

test('should render empty if no code is given', () => {
  expect(render({value: '', language: 'js'}, {withWrapper: true})).toBe(
    '<pre class="refractor language-js"><code class="language-js"></code></pre>',
  )
})

test('should render simple JS snippet correct', () => {
  expect(render({value: '"use strict";', language: 'js'}, {withWrapper: true})).toBe(
    '<pre class="refractor language-js">' +
      '<code class="language-js">' +
      '<span class="token string">&quot;use strict&quot;</span>' +
      '<span class="token punctuation">;</span>' +
      '</code>' +
      '</pre>',
  )
})

test('should use the specified language', () => {
  expect(render({value: '', language: 'haml'}, {withWrapper: true})).toBe(
    '<pre class="refractor language-haml"><code class="language-haml"></code></pre>',
  )
})

test('should be able to render inline', () => {
  expect(
    render(
      {value: 'var foo = "bar"', language: 'js', inline: true, className: 'moop'},
      {withWrapper: true},
    ),
  ).toMatchSnapshot()
})

test('should be able to highlight specific lines with markers', () => {
  const language = 'javascript'
  const code = '{\n  title: "Sanity",\n  url: "https://sanity.io/"\n}\n'
  const markers = [2, {line: 3, className: 'url'}]
  expect(render({value: code, markers, language}, {withWrapper: true})).toMatchSnapshot()
})

test('should be able to highlight specific, out-of-order lines with markers', () => {
  const language = 'javascript'
  const code =
    "import client from 'part:@sanity/base/client'\n\nexport default {\n  name: 'post',\n  type: 'document',\n  title: 'Blog post',\n  initialValue: async () => ({\n    publishedAt: new Date().toISOString(),\n    authors: await client.fetch(`\n      *[_type == \"author\" && \"marketing\" in responsbilities]{\n        \"_type\": \"authorReference\",\n        \"author\": {\n          \"_type\": \"reference\",\n          \"_ref\": _id\n        }\n      }\n    `)\n  }),\n  fields: [\n    {\n      name: 'title',\n      type: 'string',\n      title: 'Title'\n    },\n    {\n      name: 'slug',\n      type: 'slug',\n      title: 'Slug'\n    },\n    {\n      name: 'publishedAt',\n      type: 'datetime',\n      title: 'Published at'\n    },\n    {\n      name: 'authors',\n      type: 'array',\n      title: 'Authors',\n      of: [\n        {\n          type: 'authorReference'\n        }  \n      ]\n    }\n    // ...\n  ]\n}"
  const markers = [9, 11, 10, 12, 13, 14, 15, 16, 17, 18, 1]
  expect(render({value: code, markers, language}, {withWrapper: true})).toMatchSnapshot()
})

test('does not crash on markers beyond the number of lines in source', () => {
  const language = 'javascript'
  const code = "import foo from 'bar'"
  const markers = [9, 11, 10, 12, 13, 100, 14, 15, 16, 17, 18, 1]

  expect(render({value: code, markers, language})).toMatchSnapshot()
})

function render(
  props: RefractorProps,
  options: {withWrapper?: boolean; reactAttrs?: boolean} = {},
) {
  const html = options.reactAttrs
    ? ReactDOM.renderToString(createElement(Refractor, props))
    : ReactDOM.renderToStaticMarkup(createElement(Refractor, props))

  if (!options.withWrapper) {
    return html.replace(/.*?<code.*?>([\s\S]*)<\/code>.*/g, '$1')
  }

  return html
}
