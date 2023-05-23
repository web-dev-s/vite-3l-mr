module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['app1', 'app2', 'common', 'ui']],
    'subject-case': [2, 'never']
  }
}
