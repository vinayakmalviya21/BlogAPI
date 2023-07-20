const express = require('express');
const app = express();

app.get('/blog',(req,res)=>{
    res.status(200).json({
        msg:'blog get request'
    })
})


module.exports = app;