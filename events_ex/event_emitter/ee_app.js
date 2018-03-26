//EventEmitter Class
const EventEmitter = require('events');
//each word is capitalized, this indicates that it is a class
//const emitter = new EventEmitter(); //object



const Logger = require('./ee_logger');
const logger = new Logger(); //use instance of custom class that extends EE, 
//instead of using EE

//Register a listener, must be done before calling the event
logger.on('messageLogged', (arg) => {//can use arg or e or eventArg
    console.log('Listener called', arg);
});


logger.log('message');

//Raise: logging (data: message)
// emitter.on('logging', (e) => {
//     console.log('Logging called', e);
// });

// emitter.emit('logging', {id: 2, url: 'http://'});