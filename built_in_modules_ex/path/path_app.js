//Path
const path = require('path'); //Node assumes it is a built in module

var pathObj = path.parse(__filename);

console.log(pathObj);