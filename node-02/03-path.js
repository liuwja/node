var path = require('path')
var fs = require('fs')
var fileName = path.join(__dirname,'hello.txt')
console.log(fileName)

fs.readFile(fileName,'utf8',function(err,data){
	if (err) {
		console.log(err)
	}else{
		console.log(data)
	}
})
