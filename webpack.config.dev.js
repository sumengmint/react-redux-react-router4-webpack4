var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.base');

//自定义plugin
var BasicPlugin = require('./BasicPlugin');
var FileListPlugin = require('./FileListPlugin');

config.mode = 'development';

config.output.filename = 'bundle.[hash].js';

config.module.rules.push({
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
});

config.devtool = 'source-map';

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new BasicPlugin({}),
    new FileListPlugin(),
);

config.devServer = {
    contentBase: path.resolve(__dirname, './dist'),
        //publicPath: path.resolve(__dirname, './dist'),
        host: 'localhost',      // 默认是localhost
        port: 3000,             // 端口
        //open: true,             // 自动打开浏览器
        hot: true,               // 开启热更新
        historyApiFallback: true
};

module.exports = config;

