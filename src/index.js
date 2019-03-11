import path from 'path'

const plugin = (options = {}, context) => {
    const { themeConfig, siteConfig, cwd, isProd } = context
    const { config } = options

    const plugins = [
        require("tailwindcss")(config || path.join(__dirname, "tailwind.config.js")),
        require("autoprefixer"),
    ]

    /**
     * Only run purge css in production.
     */
    if (isProd) plugins.push(require("@fullhuman/postcss-purgecss")({
        content: [
            `${cwd}/.vuepress/theme/**/*.*`,
            `${cwd}/!(node_modules)/**/*.md`,
        ],

        extractors: [
            {
                /**
                 * A fix for purge css to pick up class names with escaped chars
                 * E.g. md:w-1/2.
                 *
                 * Solution from https://github.com/tailwindcss/tailwindcss/issues/391#issuecomment-366922730
                 */
                extractor: class TailwindExtractor {
                    static extract(content) {
                        return (
                            content.match(/[A-z0-9-:\/]+/g) || []
                        );
                    }
                },
                extensions: [
                    "css",
                    "html",
                    "js",
                    "vue",
                    "md",
                    "styl"
                ]
            }
        ],

        /**
         * Ensure default resets and normalised classes ar enot removed by PurgeCSS
         */
        whitelistPatterns: [
            /^(h\d|p$|ul|li$|div|ol|table|td$|th$|thead|tbody|main|input|button|form|md-|hljs)/
        ]
    }))

    /**
     * Merge in the site's purgecss config
     */
    siteConfig.postcss = Object.assign(siteConfig.postcss || {}, { plugins })

    return {
        name: '@silvanite/vuepress-plugin-tailwind',
    }
}

export default plugin
