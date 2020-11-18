var express = require('express')
var mysql = require('mysql')

var bodyparser = require('body-parser')

console.log(mysql)

var connectionObject = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'root',
    port: 3306,
    database: 'nov01friend'
   
})


connectionObject.connect((err)=>{
    if(err)
        throw err
    
    console.log("Connected to MySql server!!!!")

})    

var app = express()
app.use(express.json())
//app.use(bodyparser.json())

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

app.get('/ver_1.0/friends/:myid', (req, res)=>{
    //reuse the connection object to execute query
    console.log(req.params)
    console.log(req.params.myid)
    var queryGetFriendById = "select * from friends where id = " + req.params.myid
    connectionObject.query(queryGetFriendById,(error, success)=>{
        if(error)
            throw error

         console.log(success)
         res.json(success)
    }) 


})

app.post("/ver_1.0/friends/add", (req, res)=>{
    console.log(req.body)

    var sqlinsert = "insert into friends (id, name, location) values (" + req.body.id + ", '" + req.body.name +  "', '" + req.body.location + "')"
    console.log(sqlinsert)
    connectionObject.query(sqlinsert, (error, success)=>{
        if(error)
            throw error

        console.log(success)
       res.send("One row inserted in -  friends")

    }) 
})


app.listen(1234, ()=>{
    console.log("Listening on port 1234")
})