
const EventEmitter=require('events');

class Logger extends EventEmitter
{
    log(message)
    {
        console.log(message);
        console.log('emiting event');
        this.emit('messageLogged');
    }
}
module.exports=Logger;