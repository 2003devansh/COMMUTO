const mongoose = require('mongoose');

function connectToDatabase(){
    mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, 
        useUnifiedTopology: true},()=>{
        console.log('Connected to database');
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectToDatabase;