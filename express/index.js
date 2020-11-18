var express = require('express')

var app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Welcome to Express App!!!!" + "GET")
})

app.get('/json', (req, res)=>{
    console.log(req)
    res.json({
            message: "Welcome to REST API!!!! for " + req.method + " request",
            requestMethod: req.method,
            requestRoute:req.route 
        })
})

app.post('/json', (req, res)=>{
    console.log(req)
    res.json({
            message: "Welcome to REST API!!!! for " + req.method + " request",
            requestMethod: req.method,
            requestRoute:req.route 
        })
})

app.post('/add', (req, res)=>{
    //console.log(req)
    console.log(req.body)
    res.json({
        message:"Received request",
        requestMethod: req.method,
        requestUrl:req.url,
        requestBody: req.body
    })
})


app.listen(1234, ()=>{
    console.log("Express app listening on port 1234")
})