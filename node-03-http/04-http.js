//根据不同的请求路径做出不同的相应


//加载http模块
var http = require('http')

// 创建http服务，监听8080端口
http.createServer(function(req,res){
	console.log(req.url)

res.setHeader('Content-Type','text/plain;charset=utf-8')
	//根据不同的请求路径，返回不同的响应
	if (req.url === '/' || req.url === '/index') {
		res.write('Hello Index')
	}
	else if (req.url=== '/login') {
		res.write('Hello login')
	}
	else if (req.url=== '/list') {
		res.write('Hello list')
	}
	else if (req.url=== '/register') {
		res.write('Hello register')
	}else{
		res.write('404 客户端错误')
	}
	res.end()
}).listen(8080,function(){
	console.log('http://localhost:8080')
})