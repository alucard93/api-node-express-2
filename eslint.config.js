import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended, // Forma padrão de herdar as regras recomendadas
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node, // Muda de browser para node
      },
    },
    rules: {
      'no-unused-vars': 'warn', // Avisa sobre variáveis não usadas
      'no-console': 'off', // Permite console.log (comum em APIs)
      'prefer-const': 'error', // Exige const para variáveis que não mudam
      semi: ['error', 'never'], // Obriga o uso de ponto e vírgula
      quotes: ['error', 'simple'], // Obriga o uso de aspas simples
    },
  },
]
