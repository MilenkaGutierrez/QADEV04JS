/**
 * Created by milenkagutierrez on 8/20/2015.
 */

var Calculator = function() {

    this.calculateOperations = function () {

        console.log('The sum is: ', this.getSum(arguments));
        console.log('The max is: ', this.getMax(arguments));
        console.log('The min is: ', this.getMin(arguments));
        console.log('The avg is: ', this.getAvg(arguments));
    }

    this.getSum = function (numbers, pos) {
        if(typeof numbers == "object")
        {
            if(pos === undefined){
                pos = numbers.length - 1;
            }
            if (pos == 0)
                return numbers[pos];
            else
                return numbers[pos] + this.getSum(numbers, pos - 1);
        }
        else
        {
            return this.getSum(arguments);
        }
    }

    this.getMax = function (numbers, pos, currentVal) {
        if(typeof numbers == "object")
        {
            if(pos === undefined){
                pos = numbers.length - 1;
            }
            if((currentVal === undefined)||(currentVal <= numbers[pos])){
                currentVal = numbers[pos];}
            if (pos == 0){
                return currentVal;}
            else {
                return this.getMax(numbers, pos - 1, currentVal);
            }
        }
        else
        {
            return this.getMax(arguments);
        }
    }

    this.getMin = function (numbers, pos, currentVal) {
        if(typeof numbers == "object")
        {
            if(pos === undefined){
            pos = numbers.length - 1;
            }
            if((currentVal === undefined)||(currentVal >= numbers[pos])){
                currentVal = numbers[pos];}
            if (pos == 0){
                return currentVal;}
            else {
                return this.getMin(numbers, pos - 1, currentVal);
            }
        }
        else
        {
            return this.getMin(arguments);
        }
    }

    this.getAvg = function(numbers){
        if(typeof numbers == "object") {
            var pos = numbers.length;
            var total = this.getSum(numbers);
            return total / pos;
        }
        else
        {
            return this.getAvg(arguments);
        }
    }
}

var calculator = new Calculator();