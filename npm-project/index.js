
//1 look for in the folder
//2 look into global/default modules
//3 node_modules directory

/*const _=require('underscore');

let results=_.contains( [1,2,3], 3);
console.log(results);


var numbers = [10, 5, 100, 2, 1000];
  var x =_.min(numbers);
console.log(x);

var numbers = [10, 5, 100, 2, 1000];
var x =_.max(numbers);
console.log(x); */


const _=require('underscore');
const http=require('http');
const server=http.createServer(  (request,responce) =>
    {
        if (request.url==='/')
        {
            responce.write( 'hello world 5000');
            responce.end();
        }
    });

const port =process.env.PORT || 3000;
server.listen( 5000);
server.on('connection',function () {
    console.log('port num 3000');

})
