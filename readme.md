# VuePress Plugin to add Tailwind CSS

## Installation

```sh
npm i @silvanite/vuepress-plugin-tailwind
```

Load the plugin inside your `config.js` or in your theme's `index.js`

```js
module.exports = {
    ...
    "plugins": [
        "@silvanite/tailwind"
    ]
}
```

## Configuration options

You can overwrite the default Tailwind CSS configuration if required, otherwise the default config will be loaded.

```js
module.exports = {
    ...
    "plugins": [
        ["@silvanite/tailwind", {
            config: "./tailwind.js"
        }]
    ]
}
```

By default PurgeCSS will be applied when running vuepress build (production). You can optionally disable this if you do not want to use PurgeCSS.

```js
module.exports = {
    ...
    "plugins": [
        ["@silvanite/tailwind", {
            purgecss: { enabled: false }
        }]
    ]
}
```

## Support

If you experience any problems with this VuePress Plugin please open a new issue or get in touch on Twitter [@m2de_io](https://twitter.com/m2de_io). Or just look me up anyway, I'd love to hear from you.
