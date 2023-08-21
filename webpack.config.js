const path = require('path')
const TerserPlugin = require("terser-webpack-plugin")
module.exports = (env, argv) => {
    const prod = argv.mode === "production"
    return {
        entry: {
            main: './src/index.ts'
        },
        output: {
            environment: {
                arrowFunction: false,
            },
            filename: '[name].min.js',
            path:
                path.resolve(__dirname, 'dist'),
        },
        devtool: prod ? false : 'inline-source-map',
        target: ['web', 'es5'],
        module:
            {
                rules: [
                    {
                        test: /\.ts$/,
                        enforce: 'post',
                        use: [{ loader: path.resolve('./stripStrictLoader.js') }],
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    }
                ],
            },
        resolve: {
            extensions: ['.tsx', '.ts'],
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    minify: TerserPlugin.uglifyJsMinify,
                    terserOptions: {},
                    // extractComments: false,
                }),
            ],
        },
    }
}
