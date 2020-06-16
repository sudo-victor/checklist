module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-use-before-define': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'import/prefer-default-export': 'off',
        'import/no-unresolved': [0, { commonjs: true, amd: true }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/prop-types': 'off',
        'operator-linebreak': [
            'error',
            'before',
            { overrides: { '?': 'before', ':': 'before', '=': 'after' } },
        ],
        'implicit-arrow-linebreak': 'off',
        'function-paren-newline': 'off',
        indent: ['error', 4],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },
};
