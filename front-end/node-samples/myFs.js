var MyFileSystem = function(){
	this.fs = require('fs');
};

MyFileSystem.prototype.readFile = function(fileName){
	var content = this.fs.readFileSync(fileName).toString();
	return content;
};
	
MyFileSystem.prototype.countFileLinesAsync = function(fileName, callBack){
	this.fs.readFile(fileName,function (err, data) {
		if (err) {
			//throw 'Error with the file';
			callBack(err, undefined);
		}
		var content = data.toString();
		var numLines = content.split('\n').length;
		
		callBack(undefined, numLines);
	});
};

module.exports = MyFileSystem;


