module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    plugins: [
      'typescript'
    ],
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "excludePlugins": ["bigInt"]
  },
  rules: {}
}