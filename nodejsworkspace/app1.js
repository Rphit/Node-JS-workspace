
const EventEmitter=require('events');
const Logger=require('./logger1');
const emitter=new Logger();

emitter.addListener( 'messageLogged',function()
{
    console.log('event listend');
});

emitter.log('rohit');