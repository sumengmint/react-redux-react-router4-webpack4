var express = require('express');
var webpack = require("webpack");
var path = require("path");
var webpackDevMiddleWare = require("webpack-dev-middleware");
var webpackHotMiddleWare = require("webpack-hot-middleware");
var webpackConfig = require("../webpack.config.dev.js");
var compiler = webpack(webpackConfig);

//TODO dev mock and server-side-render
var app = express();

app.use(express.static(path.resolve(__dirname, "../" )));

//将编译器挂载给 webpack dev middleware 且它的publicPath要与webpack.config.js 的output.publicPath一致，不然找不到打包后的bundle文件
app.use(webpackDevMiddleWare(compiler, {
    publicPath: webpackConfig.output.publicPath
}));

//将编译器挂载给 webpack dev middleware
app.use(webpackHotMiddleWare(compiler, {
    heartbeat: 2000
}));

/*app.get('/#', function (request, response) {
    response.location(request.originalUrl);
});*/

app.listen(7000, function () {
    console.log('Express server started at port 7000');
});