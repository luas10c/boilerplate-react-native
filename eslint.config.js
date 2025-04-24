import globals from 'globals'

import js from '@eslint/js'

import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

import prettier from 'eslint-plugin-prettier'

import react from 'eslint-plugin-react'

import jest from 'eslint-plugin-jest'

/** @type{import('eslint').Linter.Config[]} */
const config = [
  { ignores: ['node_modules'] },
  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      '@typescript-eslint': ts,
      prettier,
      react
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      globals: {
        ...globals.es2022,
        ...globals.node,
        JSX: true
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...react.configs.recommended.rules
    }
  },
  {
    files: ['**/*.{spec,test}.ts'],
    plugins: {
      jest
    },
    rules: {
      ...jest.configs.recommended.rules
    }
  }
]

export default config
