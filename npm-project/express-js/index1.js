const express = require('express');

const app = express();
const  c= require('array');

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/api/courses',function (req, res) {
    res.send(courses);


});

app.get('/api/courses/:id',function (req, res) {

    const  course=courses.find(value => value.id===parseInt(req.params.id));
    if(!course)
    {
        res.status(400).send('not course found for given id ');
    }
    res.send(course);

});




const port=process.env.PORT ||3000;
app.listen( port,function () {

    console.log('server listining on port: ${port}');
});