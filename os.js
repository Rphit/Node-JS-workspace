const os=require(`os`);

console.log(`total memory`,os.totalmem() );
console.log(`available memory`,os.freemem() );
console.log(`host`,os.hostname() );
os.homedir()



// event class

const EventEmitter = require(`events`);
//creating object of the class
const  event=new EventEmitter();
event.on(event `messageLogged`,listener.function(){
    console.log(`hey i have lisened`);

}  );
event.emit(event `messageLogged`);