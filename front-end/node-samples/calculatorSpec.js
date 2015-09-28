var Calculator = require('./calculator.js')

describe('Calculator', function(){
	var calculator;
	
	beforeEach(function(){
		console.log('beforeEach');
		calculator = new Calculator();
	});
	
	afterEach(function(){
		console.log('afterEach');
		calculator = null;
	});
	
	describe('Sum', function(){	
		it('should error displayed with character and integer', function(){
			expect(function(){
				calculator.sum('s',4);
				}).toThrow("Is not possible do the sum, not all elements are numbers");
		});
		
		it('should add two integer numbers', function(){
			//Steps
			var actRes = calculator.sum(3,4);
			var expRes = 7;
			//Validation
			expect(actRes).toEqual(expRes);
		});	
	});
	
	describe('Subtraction', function(){	
		it('should subtrac two integer numbers', function(){
			//Steps
			var actRes = calculator.res(4,1);
			var expRes = 3;
			//Validation
			
		});
	});
	
	describe('Multiplication', function(){	
		it('should multiply two integer numbers', function(){
			//Steps
			var actRes = calculator.mul(3,3);
			var expRes = 9;
			//Validation
			expect(actRes).toEqual(expRes);
		});
	});
	
	describe('Division', function(){
		it('should divide two integer numbers', function(){
			//Steps
			var actRes = calculator.div(6,3);
			var expRes = 2;
			//Validation
			expect(actRes).toEqual(expRes);
		});
		
		it('should display an error with division with 0',function(){
			expect(function(){
				calculator.div(5,0);
				}).toThrow("Is not possible do the division with 0");
		});
	});
});