var fileServer = require('fs');

var fileName = process.argv[2];

fileServer.readFile(fileName,function (err, data) {
  if (err) throw 'Error with the file';
  console.log(data.toString().split('\n').length);
});

console.log('Im done!');