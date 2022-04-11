const express=require('express');
const path = require('path');
const app=express();

app.use(express.static('./dist/m1p9mean-frontangular-Mickael'));


app.get('/*',(req,res)=>
    res.sendFile('index.html',{root:'dist/angular-heroku'}),
);

app.listen(process.env.PORT || 3000)