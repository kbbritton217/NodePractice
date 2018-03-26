

const logger = require('./logger.js'); //best practice to store a module as a constant
//so we don't accidentally overwrite the value

logger.log('message');


// function sayHello(name){
//     console.log('Hello '+ name);
// }

// sayHello('Kaylea');

//in Node there is no Window or Document objects, there is a global object

//all the below methods exist in the window or global object
// setTimeout()
// clearTimeout()
// setInterval()
// clearInterval()

//variables that we define are not added to the global object, they are only
//available in the current file(app.js)
// window.console.log

//Every file in a node app are considered modules, modules are private (scoped 
//to that module)
//If you want to use a variable or function defined in a module, you must
//explicitly export it; (module does not exist on the global object)

//jshint is a tool that scans JS for errors, like trying to override a const