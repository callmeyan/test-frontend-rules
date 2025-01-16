module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // "plugin:vue/vue3-recommended",
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-explicit-any': [
            'off'
        ],
        'no-mixed-spaces-and-tabs': 'off',
        'no-control-regex': 0
    },
}
