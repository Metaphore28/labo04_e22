const uuid = require('uuid');
const EventEmitter = require('events');
class Logger extends EventEmitter{
    log(msg) {
        let maDate = new Date().toLocaleString();
        this.emit('message', {id: uuid.v4(), date: maDate, msg: msg});
    }
}
module.exports = Logger;