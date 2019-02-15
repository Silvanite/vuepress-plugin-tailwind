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

You can overwrite the default configuration if required

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

## Support

If you experience any problems with this VuePress Plugin please open a new issue or get in touch on Twitter [@m2de_io](https://twitter.com/m2de_io). Or just look me up anyway, I'd love to hear from you.
