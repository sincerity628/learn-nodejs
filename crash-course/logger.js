const EventEmitter = require('events');
const uuid = require('uuid');

class Log extends EventEmitter {
  log(message) {
    this.emit('message', { id: uuid.v1(), message });
  }
}

module.exports = Log;
