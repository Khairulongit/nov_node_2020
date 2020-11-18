var http = require('http')
var url = require('url')

var server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write("<h1>Hello from QueryParams!!!!</h1>")
    res.write("<h3>" + req.url + "</h3>")

    console.log(req.url)
    var queryParamObject = url.parse(req.url, true).query
    console.log(queryParamObject)

    res.write("<h3> Name: </h3>" + queryParamObject.name + "<br>")
    res.write("<h3> Location: </h3>" + queryParamObject.location + "<br>")
    res.write("<h3> Score: </h3>" + queryParamObject.score + "<br>")

    res.end()
})

server.listen(1234, ()=>{
    console.log("Server listening on port 1234");
})