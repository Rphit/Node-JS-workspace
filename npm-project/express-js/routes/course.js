const Joi = require('joi');
const express = require('express');
const  router= express.Router();


const courses=[
    {id:1,name:'dbms'},
    { id:2,name:'os'},
    { id:3,name:'java'},
    { id:4,name:'cn'}
]

// app.get('/', function (request, response) {
//
//     response.send('Hello node..')
// });

router.get('/',function (request, response) {

    response.send(courses);

});

router.get('/:id',function (request, response) {

    const  course=courses.find(value => value.id===parseInt(request.params.id));
    if(!course)
    {
        response.status(400).send('not course found for given id ');
    }
    response.send(course);

});

router.post('/',function (request,response) {

    const schema={
        name:Joi.string().min(3).required()
    };
    const result=Joi.validate(request.body,schema);



    if(result.error)
    {
        response.status(400).send('invalid name');
    }


    const course= {
        id: courses.length + 1,
        name:request.body.name
    }
    courses.push(course),

        response.send(course);

});



router.put('/:id', function (request, response) {


    {
        const course = courses.find(value => value.id === parseInt(request.params.id));
        if (!course) {
            response.status(400).send('not course found for given id ');
        }

        const schema = {
            name: Joi.string().min(3).required()
        };
        const result = Joi.validate(request.body, schema);


        if(result.error)
        {
            response.status(400).send('invalid name');
        }


        course.name = request.body.name;
        response.send(course);

    }
});


router.delete('/:id',function (request,response)  {


    {
        const course = courses.find(value => value.id === parseInt(request.params.id));
        if (!course) {
            response.status(400).send('not id found for given id ');
        }

        const index=courses.indexOf(course);
        courses.splice(index,1);
        response.send(course)
    }
});
module.exports=router;