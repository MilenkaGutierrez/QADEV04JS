var MyFileSystem = require('./myFs.js');

describe('myFs module', function(){	
	var myFs; 
	
	beforeEach(function(){
		myFs = new MyFileSystem();
	});	
	afterEach(function(){
		myFs = null;
	});
	
	it('should read a file synchronously',function(){
		var actRes = myFs.readFile('sumProgram.js');
		expect(actRes).toBeDefined();
		expect(typeof(actRes)).toEqual('string');
	});
	
	it('should have more than 0 lines',function(){
		var actRes = myFs.readFile('sumProgram.js');
		expect(actRes.toString().split('\n').length).toBeGreaterThan('0');
	});
	
	it('should read a file asynchronously',function(done){
		myFs.countFileLinesAsync('sumProgram.js', function(err, actRes){		
			expect(actRes).toBeDefined();
			expect(typeof(actRes)).toEqual('number');
			done();
		})
	});
});
