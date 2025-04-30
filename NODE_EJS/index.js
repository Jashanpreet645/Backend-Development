const express = require('express')
const app = express()
const path = require('path')

const port = 3000 //8080 //30600

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'Views'))

app.use(express.static(path.join(__dirname, 'public/css')))
app.use(express.static(path.join(__dirname, 'public/js')))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

app.get('/', (req, res) => {
    console.log("Request received")
    res.render('home.ejs')
})

app.get("/rolldice", (req, res)=>{
    console.log("Request received for rolldice");
    let dicevalue = (Math.floor(Math.random()*6)+1);
    res.render("rolldice.ejs",{dicevalue});
})

app.get("/ig/:username",(req, res)=>{
    let{ username } = req.params;
    const instadata = require('./data.json')
    // console.log(username);
    // console.log(instadata);
    const data = instadata[username];
    if(data){
    res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs",{username});
    }
})