const EventEmitter = require('events');

const Logger=require('./demo');
const log=new Logger();
//creating object of the class
const  event=new EventEmitter();
event.on('messageLogged',()=> {
    console.log('Hey I have listened!!');
});

console.log('event :messageLogged');
log.log1(' rohit');
