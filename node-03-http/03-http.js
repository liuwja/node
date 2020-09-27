
//加载http模块
var http = require('http')

//创建一个http服务对象
var server = http.createServer();

//监听用户请求事件（request事件）
server.on('request',function(req,res){
	//req可以获取用户请求信息
	//res可以向用户响应数据
	res.setHeader('Content-Type','text/html;charset=utf-8')
	res.write('hello <h1>world!!!</h1>你好实际金额！！！')
	res.end()
})

server.listen(8080,function(){
	console.log('服务器监听8080端口')
})
