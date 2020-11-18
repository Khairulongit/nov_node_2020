var mysql = require('mysql')

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
    
    console.log("Connected to MySql server!!!!");    
   
    /* console.log("Create database....");
    connectionObject.query("create database nov01friend", (err, suc)=>{
        if(err)
            throw err
        console.log("Database created -> nov01friend") 
    })*/

    /* var sqlcreatetable = "create table friends (id int(8), name varchar(32), location varchar(32), primary key (id))"
    connectionObject.query(sqlcreatetable, (error, success)=>{
        if(error)
            throw error

        console.log(success)
        console.log("Table created -  friends")

    }) */

   /*  var sqlinsert = "insert into friends (id, name, location) values (2, 'OBB', 'Chennai')"
    connectionObject.query(sqlinsert, (error, success)=>{
        if(error)
            throw error

        console.log(success)
        console.log("One row inserted in -  friends")

    }) */

    var bulkinsert = [
        [5, 'BNP', 'Ahmedabad'],
        [6, 'OWIOH', 'Japan']
    ]

    var bulkinsertsql = "insert into friends (id, name, location) values ?"
    connectionObject.query(bulkinsertsql, [bulkinsert], (error, success)=>{
        if(error)
            throw error

        console.log(success)
        console.log("Two rows inserted in -  friends")

    })




})

