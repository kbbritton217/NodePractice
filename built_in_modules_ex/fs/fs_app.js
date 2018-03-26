//FileSystem
const fs = require('fs');
//to use methods you must require them first
// const files = fs.readdirSync('./');

// console.log(files);

fs.readdir('$', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});
//always prefer to use asynchronous methods over synchronous