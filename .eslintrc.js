const path = require('path')

module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true
	},
	'settings': {
		'node': {
			'allowModules': [
				'git',
				'dialogs',
				'highlights',
				'spinner',
				'linter',
				'npm-install',
				'html-webpack-pug-plugin',
				'html-webpack-plugin',
				'webpack'
			]
		}
	},
	'plugins': ['sort-requires', 'react-pug'],
	'extends': [
		'eslint:recommended',
		'plugin:node/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
		'pug': 'readonly',
		'React': 'readonly'
	},
	'parserOptions': {
		'sourceType': 'module',
		'ecmaVersion': 2019
	},
	'rules': {
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'max-len': [
			'error', {
				'code': 80,
				'tabWidth': 4,
				'comments': 65,
				'ignoreUrls': true,
				'ignoreStrings': true,
				'ignoreTemplateLiterals': true,
				'ignoreRegExpLiterals': true
			}
		],
		'max-lines': [
			'error', {
				'max': 80,
				'skipBlankLines': true,
				'skipComments': true
			}
		],
		'no-var': 'error',
		'arrow-spacing': ['error', { 'before': true, 'after': true }],
		'no-duplicate-imports': 'error',
		'no-useless-rename': ['error', { ignoreExport: true }],
		'prefer-arrow-callback': ['error', { 'allowUnboundThis': false }],
		'no-use-before-define': ['error', { 'functions': true, 'classes': true }],
		'prefer-const': ['error', { 'ignoreReadBeforeAssign': true }],
		'prefer-destructuring': [
			'error', {
				'VariableDeclarator': {
					'array': false,
					'object': true
				},
				'AssignmentExpression': {
					'array': false,
					'object': true
				}
			}, {
				'enforceForRenamedProperties': false
			}
		],
		'prefer-rest-params': 'error',
		'prefer-template': 'error',
		'rest-spread-spacing': ['error', 'never'],
		'sort-imports': 'error',
		'sort-keys': [
			'error',
			'asc',
			{
				caseSensitive: false,
				natural: true
			}
		],
		'sort-vars': ['error', { 'ignoreCase': true }],
		'sort-requires/sort-requires': 2,
		'template-curly-spacing': 'error',
		'array-bracket-newline': ['error', { 'multiline': true, 'minItems': 4 }],
		'array-bracket-spacing': ['error', 'never'],
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
		'camelcase': [
			'error', {
				'properties': 'always',
				'ignoreDestructuring': false
			}
		],
		'capitalized-comments': ['error'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'func-call-spacing': ['error', 'never'],
		'implicit-arrow-linebreak': ['error', 'beside'],
		'jsx-quotes': ['error', 'prefer-single'],
		'key-spacing': [
			'error', {
				'beforeColon': false,
				'afterColon': true,
				'mode': 'strict'
			}
		],
		'keyword-spacing': [
			'error', {
				'before': true,
				'after': true
			}
		],
		'line-comment-position': ['error', { 'position': 'above' }],
		'lines-around-comment': [
			'error', {
				'beforeBlockComment': true,
				'afterBlockComment': true,
				'beforeLineComment': true,
				'afterLineComment': false,
				'allowBlockStart': true,
				'allowBlockEnd': true,
				'allowClassStart': true,
				'allowClassEnd': true,
				'allowObjectStart': true,
				'allowObjectEnd': true,
				'allowArrayStart': true,
				'allowArrayEnd': true,
			}
		],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'max-depth': ['error', 4],
		'max-nested-callbacks': ['error', 3],
		'max-params': ['error', 3],
		'multiline-comment-style': ['error', 'starred-block'],
		'new-cap': ['error', { 'newIsCap': true }],
		'new-parens': ['error'],
		'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
		'no-lonely-if': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
		'no-plusplus': 'error',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': ['error', 'beside'],
		'object-curly-spacing': ['error', 'always'],
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': ['error', 'after'],
		'padded-blocks': ['error', 'never'],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: ['const', 'let'], next: '*' },
			{ blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
			{
				blankLine: 'always',
				prev: '*',
				next: [
					'if', 'case', 'return', 'switch', 'try', 'do', 'while'
				]
			},
		],
		'prefer-object-spread': 'error',
		'semi-style': ['error', 'last'],
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error', {
				'anonymous': 'never',
				'named': 'never',
				'asyncArrow': 'always'
			}
		],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'switch-colon-spacing': ['error', { 'before': false, 'after': true }],
		'template-tag-spacing': ['error', 'never'],
		'handle-callback-err': 'error',
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-sync': 'error',
		'no-shadow': ['error', { 'builtinGlobals': false, 'hoist': 'functions', 'allow': [] }],
		'array-callback-return': 'error',
		'default-case': 'error',
		'dot-location': ['error', 'property'],
		'eqeqeq': ['error', 'always'],
		'no-alert': 'error',
		'no-caller': 'error',
		'no-else-return': 'error',
		'no-empty-pattern': 'error',
		'no-eval': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': ['error', { 'ignore': [-1, 0, 1, 2] }],
		'no-multi-spaces': 'error',
		'no-self-compare': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-return': 'error',
		'no-unused-vars': ['error'],
		'node/no-unsupported-features/es-syntax': [
			'error',
			{
				'version': '>=10.0.0',
				'ignores': ['modules']
			}
		],
		'react-pug/eslint': [
			'error', {
				'comma-spacing': 'error',
				'no-multi-spaces': 'error'
			}
		],
		'react-pug/no-undef': 'error',
		'react-pug/uses-react': 'error',
		'react-pug/uses-vars': 'error',
		'react-pug/empty-lines': 'off'
	}
}
