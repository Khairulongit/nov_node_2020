var fs = require('fs')
var http = require('http')
var url = require('url')

var server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    var fileNameQueryObject = req.url
    var fileNameObject = url.parse(fileNameQueryObject, true).query
    //console.log(typeof(fileNameObject))
    console.log(fileNameObject)
    console.log(fileNameObject.filename);
    console.log(typeof(fileNameObject.filename))
    var fn = fileNameObject.filename
    res.write("Reading file name: " + fn + "<br>")
   fs.readFile(fn,'utf8', (err, data)=>{
        if(err)
            throw err
        console.log(data.toString())
        res.write(data)    
        res.end()

    }) 
  

})

server.listen(1234, ()=>{
    console.log("Server listening on port 1234")
})