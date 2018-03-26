const EventEmitter = require('events');
//each word is capitalized, this indicates that it is a class

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter { // now the class has all the functionality of EE
    log(message){ //a function inside of a class is a method
        //Send http request
        console.log(message);
    
        this.emit('messageLogged', {id: 1, url: 'http://'}); //can add event arguments
        //making a noise, or produce something; making a noise to signal that an event has happened
        
    }
}



module.exports = Logger;
