module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@ks/eslint-config',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        quotes: [
            'warn',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'no-unused-vars': 'off',
        'no-undefined': 'off',
        'max-params': ['error', 30],
        // template中组件命名方式 "PascalCase" | "kebab-case"
        'vue/component-name-in-template-casing': ['error', 'kebab-case', {
            registeredComponentsOnly: true,
            ignores: [],
        }],
    },
};
