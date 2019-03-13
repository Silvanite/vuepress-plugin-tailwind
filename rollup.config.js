import RollupPluginBabel from 'rollup-plugin-babel'

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.js',
            format: 'cjs',
        },
        external: [
            "path",
            "lodash",
        ],
        plugins: [
            RollupPluginBabel(),
        ],
    },
    {
        input: 'src/tailwind.config.js',
        output: {
            file: 'dist/tailwind.config.js',
            format: 'cjs',
        },
        external: [],
        plugins: [
            RollupPluginBabel(),
        ],
    }
]
