const mongoose = require('mongoose');

function connectToDatabase(){
    mongoose.connect(process.env.DB_CONNECTION).then(()=>{
        console.log("Connected to the database");
        }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectToDatabase;