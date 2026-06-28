const express = require("express")

const app = express()       //server instance created

app.get('/',(req,res)=>{
    res.send("Hello World!!!")
})

app.get('/about',(req, res)=>{
    res.send("This is about page...")
})


app.listen(3000)            //server strated