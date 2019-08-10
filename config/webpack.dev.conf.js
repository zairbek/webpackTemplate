const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // port: 8081,
        // overlay: true,
        overlay: {
            warnings: true,
            errors: true
        },
        contentBase: baseWebpackConfig.externals.paths.dist,
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map'
        })
    ],

})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
