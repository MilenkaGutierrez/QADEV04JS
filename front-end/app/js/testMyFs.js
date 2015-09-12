/**
 * Created by milenkagutierrez on 9/11/2015.
 */
var MyFileSystem = require('./myFs.js');

var myFs = new MyFileSystem();

console.log(myFs.readFile('sumProgram.js'));
myFs.countFileLinesAsync('sumProgram.js',function (err, data) {
    if (err) {
        throw 'Error with the file';
    }
    console.log(data);
});