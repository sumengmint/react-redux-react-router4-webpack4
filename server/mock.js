// 导入路由
var http = require('http');
var express = require('express');
var server = express();
var data = require('../mock/data');

server.use('/user', data);

//启动服务
server.listen(8000, function () {
    console.log(`Express server start, http://localhost:8000`);
});