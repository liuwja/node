
//写文件
// var fs = require('fs')
// var msg = 'Hello World 你好，世界!'
// fs.writeFile('./hello.txt',msg,'utf8',function(err){
// 	console.log('111')
// 	if (err) {
// 		console.log('写文件出错啦'+err)
// 	}else{
// 		console.log('ok')
// 	}
// })

// console.log(222)

//读文件
var fs = require('fs')
fs.readFile('./hello.txt',function(err,data){
	if (err) {
		throw err
	}
	console.log(data.toString())
})

console.log(__filename)
console.log(__dirname)