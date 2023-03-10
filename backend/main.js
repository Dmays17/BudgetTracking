const express=require('express')
const app=express()
const mysql2=require('mysql2')
const bodyParser=require('body-parser')
const cors=require('cors')
//Review my sql
const db=mysql2.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'DDDm3max',
    database:'budgettracker'
})
//test to make sure database is connected.
db.connect(function(err){
    if(err)throw err;
    console.log("connected")
})

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(3001,()=>{
    console.log("running on port 3001")
})