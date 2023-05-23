const { join } = require('path')

const ext = '{t,j}s?(x)'
const storiesGlob = `**/*.stories.${ext}`

const jsRules = {
  'no-void': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
  yoda: ['error', 'never'],
  'import/prefer-default-export': 'off',
  'consistent-return': 'off',
  'no-underscore-dangle': 'off',
  'func-names': 'off',
  'no-restricted-syntax': 'off',
  curly: ['error', 'all'],
  'prefer-destructuring': ['error', { object: true, array: true }],
  'import/order': [
    'error',
    {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      }
    }
  ],
  'import/no-extraneous-dependencies': ['error'],
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'block' },
    { blankLine: 'always', prev: 'block', next: '*' },
    { blankLine: 'always', prev: '*', next: 'block-like' },
    { blankLine: 'always', prev: 'block-like', next: '*' }
  ]
}
const tsRules = {
  'react/prop-types': 'off',
  'react/no-unused-prop-types': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
      classes: false,
      variables: false
    }
  ],
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-empty-function': 'warn',
  '@typescript-eslint/no-inferrable-types': 'warn',
  '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
}
module.exports = {
  env: {
    node: true
  },
  overrides: [
    {
      files: ['**/**.js'],
      extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
      ],
      //    parser: "espree",
      rules: jsRules
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
      },
      env: {
        browser: true,
        es6: true
      },
      settings: {
        react: {
          version: 'detect'
        }
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
      },
      plugins: ['react', '@typescript-eslint'],
      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended'
      ],
      rules: {
        ...jsRules,
        ...tsRules
      }
    },
    {
      files: ['apps/app1/**/*.ts?(x)'],
      parserOptions: {
        project: join(__dirname, 'apps', 'app1', 'tsconfig.json')
      }
    },
    {
      files: ['apps/app2/**/*.ts?(x)'],
      parserOptions: {
        project: join(__dirname, 'apps', 'app2', 'tsconfig.json')
      }
    },
    {
      files: ['packages/monorepo-login/**/*.ts?(x)'],
      parserOptions: {
        project: join(__dirname, 'packages', 'monorepo-login', 'tsconfig.json')
      }
    }, //dummy entry from inexistent folder monorepo-login
    {
      files: ['common/**/*.ts?(x)'],
      parserOptions: {
        project: join(__dirname, 'common', 'tsconfig.json')
      }
    },
    {
      files: ['packages/ui/**/*.ts?(x)'],
      parserOptions: {
        project: join(__dirname, 'packages', 'ui', 'tsconfig.json')
      }
    },
    {
      files: ['**/*.json'],
      plugins: ['json-format']
    },
    {
      files: [storiesGlob],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ]
}
