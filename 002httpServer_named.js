var http = require('http')

//var myFirstServer = http.createServer(named Function)
//var myFirstServer = http.createServer(ghost/Anonymous function)
//var myFirstServer = http.createServer(arrow function)


//variable named function!
/* 
myServer = function(request, response){
    //console.log(request)
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write('<h1>Hello from my server again....</h1>')
    response.end()
} */


var myFirstServer = http.createServer(myServer)

function myServer(request, response){
    //console.log(request)
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write('<h1>Hello from my server again....</h1>')
    response.end()
}

myFirstServer.listen(1234)