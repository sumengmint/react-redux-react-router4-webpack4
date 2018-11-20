var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/main.js',
    output: {
        path: path.resolve('./dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: path.resolve('src')
            },
            {
                test: /\.less$/,
                use: [/*MiniCssExtractPlugin.loader, */'style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            }
        ]
    },
    /*externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },*/
    plugins: [
        // 通过new一下这个类来使用插件
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: './src/index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串
        }),
        /*new MiniCssExtractPlugin({
            filename: 'style.css'   // 指定打包后的css
        }),*/
        new CleanWebpackPlugin(path.resolve('./dist')),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve('./dist'),
        //publicPath: path.resolve('/dist'),
        host: 'localhost',      // 默认是localhost
        port: 3000,             // 端口
        open: true,             // 自动打开浏览器
        hot: true,               // 开启热更新
        historyApiFallback: true
    }
};