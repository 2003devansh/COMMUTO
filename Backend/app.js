const dotenv = require('dotenv') ;
dotenv.config() ; 
const cors = require('cors') ; 
const express = require('express'); 
const app   = express(); 
app.use(cors()) ;

const connectToDatabase = require('./database/database') ;
connectToDatabase() ;


app.get("/",(req,res)=>{
    res.send("hello world") ; 
})

module.exports = app ;