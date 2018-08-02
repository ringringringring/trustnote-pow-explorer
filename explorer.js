/*jslint node: true */
"use strict";
require('./relay');
var conf = require('./trustnote-common/conf.js');
var eventBus = require('./trustnote-common/event_bus.js');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var ws = require('./controllers/ws');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/detail', function(req, res) {
	res.sendFile(__dirname + '/views/detail.html');
});

app.get('/addressMap', function(req, res) {
	res.sendFile(__dirname + '/views/addressMap.html');
});

eventBus.on('new_joint', function() {
	io.sockets.emit('update');
});

/*
//https://www.jianshu.com/p/4e80b931cdea
客户端
<script src="http://cdn.socket.io/stable/socket.io.js"></script>
<script>
// socket.io引入成功后，可通过io()生成客户端所需的socket对象。
let socket = io('http://127.0.0.0:3000');

// socket.emmit()用户客户端向服务端发送消息，服务端与之对应的是socket.on()来接收信息。
socket.emmit('client message', {msg:'hi, server'});

// socket.on()用于接收服务端发来的消息
socket.on('connect',  ()=>{
  console.log('client connect server');
});
socket.on('disconnect', ()=>{
  console.log('client disconnect');
});
</script>
*/

//服务端监听连接状态：io的connection事件表示客户端与服务端成功建立连接，它接收一个回调函数，回调函数会接收一个socket参数。
//socket 相当于一个管道端口
/*
Socket.IO用于浏览器与node.js之间实现实时通信。Socket.IO设计的目标是支持任何的浏览器，任何Mobile设备。支持主流的PC浏览器 (IE,Safari,Chrome,Firefox,Opera等)，Mobile浏览器(iphone Safari/ipad Safari/android WebKit/WebOS WebKit等)。
Socket.IO支持如下方式的通信方式，根据浏览器的支持程度，自动选择使用哪种技术进行通信：
*/
io.on('connection', function(socket) {
	socket.on('staticdata', ws.staticdata);
	socket.on('start', ws.start);
	socket.on('next', ws.next);
	socket.on('prev', ws.prev);
	socket.on('new', ws.newUnits);
	socket.on('info', ws.info);
	socket.on('highlightNode', ws.highlightNode);
	socket.on('nextPageTransactions', ws.nextPageTransactions);
});

//详情页面的 socket 管理者
io.of('detail').on('connection', function(socket) {
	socket.on('start', ws.start);
	socket.on('next', ws.next);
	socket.on('prev', ws.prev);
	socket.on('new', ws.newUnits);
	socket.on('info', ws.info);
	socket.on('highlightNode', ws.highlightNode);
	socket.on('nextPageTransactions', ws.nextPageTransactions);
});
console.log('listen: conf.webPort: ', conf.webPort);
server.listen(conf.webPort);
