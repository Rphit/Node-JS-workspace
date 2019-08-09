//
 const  http=require('http');
// const server=http.createServer();
// server.on('connection',function () {
//    console.log('server created and ready');
// });
// server.listen(3000);


const student={
    id:100,
    name:'rohit',
     place:'indore'
};

const server=http.createServer(function (request,response) {

    if (request.url === ('/')) {
        response.write(JSON.stringify(student));
        response.end();
    }
});


server.listen(3000);
