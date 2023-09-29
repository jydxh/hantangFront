// 设置服务器信息，在请求接口地址的时候自动拼接这部分
var baseURL = 'http://127.0.0.1:3000'

// 发送GET/DELETE请求
function get(obj){
	// obj接收到了一个对象
	// obj.type 请求方式
	// obj.url  接口地址
	// obj.success 这是一个函数，获取成功结果后，调用这个函数，把响应的结果传递出去
	// obj.data  接口需要的参数，是对象形式，需要转换为 pno=1&count=5
	var arr = []
	for(var k in obj.data){
		arr.push(k + '=' + obj.data[k])
	}
	var str = arr.join('&')  //接口所需要的的参数
	// 1.创建HTTP请求对象
	var xhr = new XMLHttpRequest()
	// 2.打开服务器的连接，设置请求的接口，把参数拼接到URL后边
	// 把服务器信息拼接到接口地址前
	xhr.open(obj.type,baseURL+obj.url+'?'+str,true)
	// 3.发送请求
	xhr.send()
	// 4.绑定事件，监听服务器响应
	xhr.onload = function(){
		// 将响应结果转为JS
		var o = JSON.parse( xhr.responseText )
		// 调用传递的函数,再把结果传递的外部
		obj.success(o)
	}
}
// 发送POST/PUT请求
function post(obj){
	// obj.type  接口请求方式
	// obj.url  接口地址
	// obj.success  回调函数，成功后调用
	// obj.data  接口所需参数，格式为对象，需要转为格式 a=1&b=2
	var arr = []
	for(var k in obj.data){
		arr.push(k + '=' + obj.data[k])
	}
	var str = arr.join('&')
	// console.log(str)
	// 1.创建HTTP请求对象
	var xhr = new XMLHttpRequest()
	// 2.打开服务器的连接，设置请求的接口
	xhr.open(obj.type,baseURL+obj.url,true)
	// post请求，需要设置参数的编码方式
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
	// 3.发送请求
	xhr.send(str)
	// 4.绑定事件，监听服务器端响应
	xhr.onload = function(){
		// 将响应结果转JS
		var o = JSON.parse( xhr.responseText )
		// 最后通过回调函数传递外部
		obj.success(o)
	}
}

// 把所有的请求方法封装成ajax函数
function ajax(obj){
	// obj.data 是传递的参数，需要转换为以下格式 a=1&b=2
	var arr = []
	for(var k in obj.data){
		arr.push( k + '=' + obj.data[k] )
	}
	var str = arr.join('&')
	// console.log(str)
	// 创建HTTP请求对象
	var xhr = new XMLHttpRequest()
	// 判断请求的方式是哪一种
	// 转大写
	var method = obj.type.toUpperCase()
	if(method === 'GET' || method === 'DELETE'){
		// 打开服务器的连接，设置请求的接口
		xhr.open(method,baseURL+obj.url + '?' + str,true)
		// 发送请求
		xhr.send()
	}else if(method === 'POST' || method === 'PUT'){
		// 打开服务器的连接，设置请求的接口
		xhr.open(method,baseURL+obj.url,true)
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
		xhr.send(str)
	}
	// 绑定事件，监听服务器端响应
	xhr.onload = function(){
		// 把响应结果JSON转为JS
		var o = JSON.parse( xhr.responseText )
		obj.success(o)
	}
}
