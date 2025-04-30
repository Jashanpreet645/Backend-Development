const express = require('express');
const app = express();
const path = require('path');
const port = 3000; //8080 //30600

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

app.get('/register',(req,res)=>{
    let {username,password} = req.query;
    res.send(`GET response,Welcome ${username} with password = ${password}`)
    
})

app.post('/register',(req,res)=>{
    let {username,password} = req.query;
    res.send(`POST response,Welcome ${username} with password = ${password}`)
})

