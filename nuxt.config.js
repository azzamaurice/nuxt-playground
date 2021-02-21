import Sass from 'sass'

export default {
    ssr: false,
    target: `static`,
    head: {
        title: `nuxt-playground`,
        htmlAttrs: {
            lang: `en`
        },
        meta: [
            { charset: `utf-8` },
            { name: `viewport`, content: `width=device-width, initial-scale=1` },
            { hid: `description`, name: `description`, content: `` }
        ],
        link: [
            { rel: `icon`, type: `image/x-icon`, href: `/favicon.ico` }
        ]
    },
    css: [
        `normalize.css`,
        `~/assets/styles/style.scss`
    ],
    components: true,
    buildModules: [
        `@nuxtjs/eslint-module`,
        `@nuxtjs/stylelint-module`
    ],
    build: {
        loaders: {
            scss: {
                implementation: Sass,
                sourceMap: false
            }
        }
    }
}
