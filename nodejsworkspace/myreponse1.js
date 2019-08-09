
const  http=require('http');

const event={

    name:'birthday event',
    guestList:['sachin','rahul','john'],
    printGuestList()
    {
        console.log('guest list for' +this.name);
        this.guestList.forEach( (guest)=>{

            console.log(guest+ 'is attending'+this.name)
            })

    }
};


const server=http.createServer(function (request,response) {

    if (request.url===('/')) {
        event.printGuestList();
        response.write('hello');
        response.end();
    }
});

server.listen(3000);