import type {Element as RefractorElement, Text} from 'hast'

export const astFixtures: Array<RefractorElement | Text> = [
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'keyword'],
    },
    children: [
      {
        type: 'text',
        value: 'import',
      },
    ],
  },
  {
    type: 'text',
    value: ' client ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'keyword'],
    },
    children: [
      {
        type: 'text',
        value: 'from',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'part:@sanity/base/client'",
      },
    ],
  },
  {
    type: 'text',
    value: '\n\n',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'keyword'],
    },
    children: [
      {
        type: 'text',
        value: 'export',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'keyword'],
    },
    children: [
      {
        type: 'text',
        value: 'default',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '{',
      },
    ],
  },
  {
    type: 'text',
    value: '\n  name',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'post'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n  type',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'document'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n  title',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'Blog post'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n  ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'function-variable', 'function'],
    },
    children: [
      {
        type: 'text',
        value: 'initialValue',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'keyword'],
    },
    children: [
      {
        type: 'text',
        value: 'async',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '(',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ')',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: '=>',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '(',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '{',
      },
    ],
  },
  {
    type: 'text',
    value: '\n    publishedAt',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'keyword'],
    },
    children: [
      {
        type: 'text',
        value: 'new',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'class-name'],
    },
    children: [
      {
        type: 'text',
        value: 'Date',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '(',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ')',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '.',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'function'],
    },
    children: [
      {
        type: 'text',
        value: 'toISOString',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '(',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ')',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n    authors',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'keyword'],
    },
    children: [
      {
        type: 'text',
        value: 'await',
      },
    ],
  },
  {
    type: 'text',
    value: ' client',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '.',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'function'],
    },
    children: [
      {
        type: 'text',
        value: 'fetch',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '(',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'template-string'],
    },
    children: [
      {
        type: 'element',
        tagName: 'span',
        properties: {
          className: ['token', 'template-punctuation', 'string'],
        },
        children: [
          {
            type: 'text',
            value: '`',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'span',
        properties: {
          className: ['token', 'string'],
        },
        children: [
          {
            type: 'text',
            value:
              '\n      *[_type == "author" && "marketing" in responsbilities]{\n        "_type": "authorReference",\n        "author": {\n          "_type": "reference",\n          "_ref": _id\n        }\n      }\n    ',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'span',
        properties: {
          className: ['token', 'template-punctuation', 'string'],
        },
        children: [
          {
            type: 'text',
            value: '`',
          },
        ],
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ')',
      },
    ],
  },
  {
    type: 'text',
    value: '\n  ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '}',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ')',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n  fields',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '[',
      },
    ],
  },
  {
    type: 'text',
    value: '\n    ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '{',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      name',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'title'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      type',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'string'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      title',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'Title'",
      },
    ],
  },
  {
    type: 'text',
    value: '\n    ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '}',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n    ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '{',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      name',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'slug'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      type',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'slug'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      title',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'Slug'",
      },
    ],
  },
  {
    type: 'text',
    value: '\n    ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '}',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n    ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '{',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      name',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'publishedAt'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      type',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'datetime'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      title',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'Published at'",
      },
    ],
  },
  {
    type: 'text',
    value: '\n    ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '}',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n    ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '{',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      name',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'authors'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      type',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'array'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      title',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'Authors'",
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ',',
      },
    ],
  },
  {
    type: 'text',
    value: '\n      ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'keyword'],
    },
    children: [
      {
        type: 'text',
        value: 'of',
      },
    ],
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '[',
      },
    ],
  },
  {
    type: 'text',
    value: '\n        ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '{',
      },
    ],
  },
  {
    type: 'text',
    value: '\n          type',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'operator'],
    },
    children: [
      {
        type: 'text',
        value: ':',
      },
    ],
  },
  {
    type: 'text',
    value: ' ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'string'],
    },
    children: [
      {
        type: 'text',
        value: "'authorReference'",
      },
    ],
  },
  {
    type: 'text',
    value: '\n        ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '}',
      },
    ],
  },
  {
    type: 'text',
    value: '  \n      ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ']',
      },
    ],
  },
  {
    type: 'text',
    value: '\n    ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '}',
      },
    ],
  },
  {
    type: 'text',
    value: '\n    ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'comment'],
    },
    children: [
      {
        type: 'text',
        value: '// ...',
      },
    ],
  },
  {
    type: 'text',
    value: '\n  ',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: ']',
      },
    ],
  },
  {
    type: 'text',
    value: '\n',
  },
  {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['token', 'punctuation'],
    },
    children: [
      {
        type: 'text',
        value: '}',
      },
    ],
  },
]
