module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential'
  ],
  globals: {
		moment: true
	},
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [2, 'tab', { 'SwitchCase': 1 }],
		'no-tabs': 0,
		'no-new': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
