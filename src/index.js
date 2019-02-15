import path from 'path'

const plugin = (options = {}, context) => {
    const { themeConfig, siteConfig } = context
    const { config } = options

    siteConfig.postcss = Object.assign({
        plugins: [
            require("tailwindcss")(config || path.join(__dirname, "tailwind.config.js")),
            require("autoprefixer")
        ]
    }, siteConfig.postcss)

    return {
        name: '@silvanite/vuepress-plugin-tailwind',
    }
}

export default plugin
