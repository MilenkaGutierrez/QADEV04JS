var Calculator = function(){
};

Calculator.prototype.sum = function(num1, num2){
	if(typeof(num1)=='number' && typeof(num2)=='number')
		return num1+num2;
	else
		throw "Is not possible do the sum, not all elements are numbers";
};

Calculator.prototype.res = function(num1, num2){
	return num1-num2;
};

Calculator.prototype.mul = function(num1, num2){
	return num1*num2;
};

Calculator.prototype.div = function(num1, num2){
	if(num2 > 0)
		return num1/num2;
	else
		throw "Is not possible do the division with 0";
};

module.exports = Calculator;