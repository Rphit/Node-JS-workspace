
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json())


const courses=[
      {id:1,name:'dbms'},
      { id:2,name:'os'},
      { id:3,name:'java'},
      { id:4,name:'cn'}
]

app.get('/', function (request, response) {

              response.send('Hello node..')
});

app.get('/api/courses',function (request, response) {

              response.send(courses);

});

app.get('/api/courses/:id',function (request, response) {

    const  course=courses.find(value => value.id===parseInt(request.params.id));
       if(!course)
            {
                   response.status(400).send('not course found for given id ');
            }
                   response.send(course);

});

app.post('/api/courses',function (request,response) {

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



 app.put('/api/courses/:id', function (request, response) {


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


 app.delete('/api/courses/:id',function (request,response)  {


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

//
// app.get('/api/courses/:id',function (req, res) {
//    // res.send(req.params);
//    res.send(req.query);
// })

const port=process.env.PORT ||3000;
app.listen( port,function () {

                 console.log(`server listining on port: ${port}`);
});