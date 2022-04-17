const mongoose = require('mongoose');
require('dotenv').config();
module.exports = ()=>{
    
    // mongoose.connect(`mongodb+srv://yunus:${process.env.APIKEY}@cluster0.kx7vo.mongodb.net/myFirstDatabase`);
    mongoose.connect(`mongodb+srv://${process.env.APIKEY}@cluster0.kx7vo.mongodb.net/candidates`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
      );
    // mongoose.connect('mongodb://localhost:27017/candidatesdb');

    
    mongoose.connection.on("open",()=>{console.log('Success - MongoDB Connected.')})

    mongoose.connection.on("error",(err)=>{console.log('MongoDB Connect Failed. Error : ' , err)})

}