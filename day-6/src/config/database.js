const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect("mongodb+srv://abhinav:Ansh181980@cluster0.u4wizms.mongodb.net/day-6")
        .then(()=>{
            console.log("Connected to Database")
        })
        .catch((err) => {
            console.error("Database connection failed:", err);
        });
}


module.exports = connectToDb