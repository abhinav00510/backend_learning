const express = require('express')

const app = express()


app.use(express.json())


const notes = [
    // {
    //     "title":"test title 1",
    //     "description":"test description 1"
    // }
]

// app.get("/", (res, req)=>{
//     res.send("Hello World");
// })


// POST /notes => REACTS AS A CLIENT

app.post("/notes", (req, res)=>{
    console.log(req.body)
    notes.push(req.body)

    console.log(notes)

    res.send("note created")
})


// GET /notes => FOR SHOWING IT TO THE CLIENT FROM SERVER SIDE

app.get("/notes", (req, res)=>{
    res.send(notes)
})



// DELETE /notes
// params

//delete/notes/0,1,2,3,4 (index)

app.delete("/notes/:index", (req, res)=>{
    // console.log(req.params.index)

    delete notes[req.params.index]
    res.send("Note deleted succcessfully")
})


app.patch("/notes/:index",(req, res)=>{

    notes[req.params.index].description = req.body.description

    res.send("Notes updated");
})



module.exports = app