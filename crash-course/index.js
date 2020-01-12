const Log = require('./logger');

const log = new Log();

log.on('message', data => console.log('message fired with', data));

log.log('hey, I have been thinking about u...');
