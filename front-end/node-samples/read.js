var fileServer = require('fs');

var fileName = process.argv[2];

console.log(fileServer.readFileSync(fileName).toString());