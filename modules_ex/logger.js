//(function (exports, require, module, __filename, __dirname) {
// ^^module wrapper function
console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message){
    //Send http request
    console.log(message);
}

//adding a method called 'log' to the exports object
module.exports.log = log; //sets as object with function, export object

//module.exports = log; //sets as function, exports single function

//exports is a reference to module.exports, it cannot be rewritten
//}) //Node wraps the code in a module inside of an IIFE, it does not execute 
//the code directly