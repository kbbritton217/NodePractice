//Operating System
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);//using concatenation

console.log(`Free Memory: ${freeMemory}`); //use a template string 
//instead of concatenation