var http = require('http')

//var myFirstServer = http.createServer(named Function)
//var myFirstServer = http.createServer(ghost/Anonymous function)
//var myFirstServer = http.createServer(arrow function)


var myFirstServer = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write('<h1>Hello from my server again ARROW....</h1>')
    response.write('<h1>I am with Nodemon....</h1>')
    response.end()
})

//variable named function!
/* 
myServer = function(request, response){
    //console.log(request)
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write('<h1>Hello from my server again....</h1>')
    response.end()
} */


/* var myFirstServer = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write('<h1>Hello from my server again GHOST....</h1>')
    response.end()
}) */

/* function myServer(request, response){
    //console.log(request)
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write('<h1>Hello from my server again....</h1>')
    response.end()
} */

myFirstServer.listen(1234)