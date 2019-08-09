
const Joi = require('joi');
const express = require('express');
const app = express();

const router=require('./routes/course');
app.use( '/api/courses',router);


app.use(express.json());
app.use(express.static('public'));


const pug=require('pug');
app.set('view engine','pug');


app.get('/', function(request,response)

{
    response.render('index',{title:'well come in js', message: 'well come to pug'});
});



const port=process.env.PORT ||3000;
app.listen( port,function () {

    console.log(`server listining on port: ${port}`);
});
