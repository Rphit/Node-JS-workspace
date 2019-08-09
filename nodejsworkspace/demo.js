
const EventEmitter=require(`events`);


class Logger extends EventEmitter
{
  log1(message)
  {
      console.log(`hello IBM `+message);
      this.emit(`messageLogged`);
  }
}

module.exports=Logger;