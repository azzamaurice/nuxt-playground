module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: `babel-eslint`
    },
    extends: [
        `@nuxtjs`,
        `plugin:nuxt/recommended`
    ],
    rules: {
        'indent': [2, 4],
        'quotes': [2, `single`, { allowTemplateLiterals: true }],
        'quote-props': [2, `consistent-as-needed`],
        'space-before-function-paren': [2, {
            anonymous: `never`,
            named: `never`,
            asyncArrow: `always`
        }],
        'vue/html-closing-bracket-newline': [2, {
            singleline: `never`,
            multiline: `never`
        }],
        'vue/html-closing-bracket-spacing': [2, {
            startTag: `never`,
            endTag: `never`,
            selfClosingTag: `never`
        }],
        'vue/html-indent': [2, 4]
    }
}
