const express = require('express');
const app = express();
const mongoose = require('mongoose');
const categoryRoute = require('./api/routes/category')
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017')
.then(res=>{
    console.log("Database connected");
})
.catch(err=>{
    console.log(err)
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/category',categoryRoute);

app.get('/blog',(req,res)=>{
    res.status(200).json({
        msg:'blog get request'
    })
})


module.exports = app;