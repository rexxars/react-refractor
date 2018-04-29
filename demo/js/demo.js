const React = require('react')
const ReactDOM = require('react-dom')
const Refractor = require('../../')
const h = React.createElement

Refractor.registerLanguage(require('refractor/lang/javascript'))
Refractor.registerLanguage(require('refractor/lang/markup'))
Refractor.registerLanguage(require('refractor/lang/css'))
Refractor.registerLanguage(require('refractor/lang/clike'))
Refractor.registerLanguage(require('refractor/lang/jsx'))

const languages = ['jsx', 'javascript', 'markup', 'css', 'clike']
const defaultValue = getDefaultValue()
const BitwiseMarker = props =>
  h('div', {className: 'bitwise', title: 'Eyyh, bitwise operator!'}, props.children)

class ReactRefractorDemo extends React.Component {
  constructor() {
    super()

    this.state = {value: defaultValue, language: languages[0]}
    this.handleSetValue = this.handleSetValue.bind(this)
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  handleSetValue(evt) {
    this.setState({
      value: evt.target.value
    })
  }

  handleChangeLanguage(evt) {
    this.setState({language: evt.target.value})
  }

  render() {
    return h(
      'div',
      {className: 'container'},
      // Input
      h(
        'div',
        {className: 'input'},
        h(
          'h2',
          null,
          'Input',
          h(
            'select',
            {onChange: this.handleChangeLanguage},
            languages.map(lang => h('option', {key: lang}, lang))
          )
        ),
        h('textarea', {
          defaultValue: defaultValue,
          onChange: this.handleSetValue
        })
      ),

      // Output
      h(
        'div',
        {className: 'output'},
        h('h2', null, 'Output'),
        h(
          'div',
          {className: 'out'},
          h(Refractor, {
            value: this.state.value,
            language: this.state.language,
            markers:
              this.state.value === defaultValue
                ? [{line: 10, component: BitwiseMarker}, 11, 12]
                : []
          })
        )
      )
    )
  }
}

ReactDOM.render(h(ReactRefractorDemo), document.getElementById('root'))

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
    '// "MoO0ooO0ooO0ooO0ooO0o"'
  ].join('\n')
}
