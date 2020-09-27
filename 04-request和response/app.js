var http = require('http')

http.createServer(function(req,res){
	//req.headers返回的是一个对象，包含了所有的报文头内容
	// console.log(req.headers)	//在控制台打印请求报文头

	//req.rawHeaders返回的是一个报文头的字符串数组对象
	// console.log(req.rawHeaders)		//控制台打印rowHeaders

	// console.log(req.httpVersion)	//输出http版本号 1.1

	// console.log(req.method)			//输出客户端请求的方法 get post put delete等

	console.log(req.url)			//输出客户端请求的路径
	res.end('over')
}).listen(8080,function(){
	console.log('http://localhost:8080')
})