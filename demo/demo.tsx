import React from 'react'
import ReactDOM from 'react-dom/client'

import javascript from 'refractor/lang/javascript.js'
import markup from 'refractor/lang/markup.js'
import css from 'refractor/lang/css.js'
import clike from 'refractor/lang/clike.js'
import jsx from 'refractor/lang/jsx.js'

import {Refractor, registerLanguage} from '../src/index.js'

registerLanguage(javascript)
registerLanguage(markup)
registerLanguage(css)
registerLanguage(clike)
registerLanguage(jsx)

const languages = ['jsx', 'javascript', 'markup', 'css', 'clike']
const defaultValue = getDefaultValue()
const BitwiseMarker = (props) => (
  <div className="bitwise" title="Eyyh, bitwise operator!">
    {props.children}
  </div>
)

function ReactRefractorDemo() {
  const [value, setValue] = React.useState(defaultValue)
  const [language, setLanguage] = React.useState(languages[0])

  return (
    <div className="container">
      {/* Input */}
      <div className="input">
        <h2>
          Input
          <select onChange={(evt) => setLanguage(evt.target.value)}>
            {languages.map((lang) => (
              <option key={lang}>{lang}</option>
            ))}
          </select>
        </h2>
        <textarea defaultValue={defaultValue} onChange={(evt) => setValue(evt.target.value)} />
      </div>

      {/* Output */}
      <div className="output">
        <h2>Output</h2>
        <div className="out">
          <Refractor
            value={value}
            language={language}
            markers={value === defaultValue ? [{line: 10, component: BitwiseMarker}, 11, 12] : []}
          />
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactRefractorDemo />
  </React.StrictMode>,
)

// Hiding this ugliness down here.
function getDefaultValue() {
  return [
    "'use strict'\n",

    'function longMoo(count) {',
    '  if (count < 1) {',
    "    return ''",
    '  }\n',

    "  var result = '', pattern = 'oO0o'",
    '  while (count > 1) {',
    '    if (count & 1) {',
    '      result += pattern',
    '    }\n',

    '    count >>= 1, pattern += pattern',
    '  }\n',

    "  return 'M' + result + pattern",
    '}\n',

    'console.log(longMoo(5))',
    '// "MoO0ooO0ooO0ooO0ooO0o"',
  ].join('\n')
}
