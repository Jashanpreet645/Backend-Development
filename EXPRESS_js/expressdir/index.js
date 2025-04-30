const express = require('express')
const app = express()

// console.log(app)

let port  = 3000 //8080
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// app.get(`/`, (req, res) => {
//     res.send("Hello World")
// })

// app.get(`/oranges`, (req, res) => {
//     res.send("you are in the orange page")
// })

// app.get(`/oranges`, (req, res) => {
//     res.send("you are in the orange page")
// })
// app.use((req,res)=>{
//     console.log("request received")
//     res.send("this is basic response")
// })

app.get(`/:username`, (req, res) => {
    conso le.log(req.params)
})