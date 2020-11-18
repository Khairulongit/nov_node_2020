var express = require('express')
var mysql = require('mysql')

var bodyparser = require('body-parser')

console.log(mysql)

var connectionObject = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'password',
    port: 3306,
    database: 'nov01friend'
   
})


connectionObject.connect((err)=>{
    if(err)
        throw err
    
    console.log("Connected to MySql server!!!!")

})    

var app = express()
app.use(bodyparser.json())

app.get('/ver_1.0/friends/all', (req, res)=>{
    //reuse the connection object to execute query
    var queryGetAll = "select * from friends"
    connectionObject.query(queryGetAll,(error, success)=>{
        if(error)
            throw error

         console.log(success)
         res.json(success)
    })


})

app.listen(1234, ()=>{
    console.log("Listening on port 1234")
})