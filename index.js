const express = require("express");
const app= express();

const PORT=4015;
const HOSTNAME= 'localhost';

app.get('/', (req,res)=>{
    res.send('Hello World')
})
app.get('/about', (req,res)=>{
    res.send('<h1>About Page</h1>')
})

app.listen(PORT,()=>{
    console.log("Server is running ar ${HOSTNAME}:${PORT}");
    
})