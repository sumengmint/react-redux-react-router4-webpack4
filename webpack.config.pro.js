var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var config = require('./webpack.config.base');

config.mode = 'production';

config.output.filename = '[name].[chunkhash].js';

config.module.rules.push({
    test: /\.less$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
});

config.plugins.push(
    new CleanWebpackPlugin(path.resolve(__dirname, './dist')),
    new MiniCssExtractPlugin( {
        filename: 'style.[chunkhash].css'   // 指定打包后的css
    }),
    new BundleAnalyzerPlugin()
);

config.optimization = {
    splitChunks: {
        chunks: 'all',
            minSize: 0,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                    priority: -10
            },
        default: {
                minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
            }
        }
    }
};

module.exports = config;

