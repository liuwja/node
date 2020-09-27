//根据用户不同请求相应html页面
//加载http模块
var http = require('http')

//加载fs模块

var fs = require('fs')
//加载path模块
var path = require('path')

// 创建http服务，监听8080端口
http.createServer(function(req,res){
	console.log(req.url)

	// res.setHeader('Content-Type','text/plain;charset=utf-8')
	//根据不同的请求路径，返回不同的响应
	
	if (req.url === '/' || req.url === '/index') {

		fs.readFile(path.join(__dirname,'htmls','index.html'),function(err,data){
			if (err) {
				throw err
			}
			res.write(data)
			res.end()
		})
		
	}
	else if (req.url=== '/login') {
		fs.readFile(path.join(__dirname,'htmls','login.html'),function(err,data){
			if (err) {
				throw err
			}
			res.write(data)
			res.end()
		})
	}
	else if (req.url=== '/list') {
		fs.readFile(path.join(__dirname,'htmls','list.html'),function(err,data){
			if (err) {
				throw err
			}
			res.write(data)
			res.end()
		})
	}
	else if (req.url=== '/register') {
		fs.readFile(path.join(__dirname,'htmls','register.html'),function(err,data){
			if (err) {
				throw err
			}
			res.write(data)
			res.end()
		})
	}else{
		fs.readFile(path.join(__dirname,'htmls','404.html'),function(err,data){
			if (err) {
				throw err
			}
			res.write(data)
			res.end()
		})
	}
}).listen(8080,function(){
	console.log('http://localhost:8080')
})