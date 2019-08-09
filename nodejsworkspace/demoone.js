const EventEmitter = require('events');
//creating object of the class
const  event=new EventEmitter();
event.on(eve 'messageLogged',listener.function(){
    console.log(`hey i have lisened`);

}  );
event.emit(event 'messageLogged');