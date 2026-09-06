const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Connected to Database")
        })
        .catch((err) => {
            console.error("Database connection failed:", err);
        });
}


module.exports = connectToDb