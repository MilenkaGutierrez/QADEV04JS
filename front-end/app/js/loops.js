/**
 * Created by milenkagutierrez on 8/21/2015.
 */

var getFirstCapicua = function(minor,major){
    var number = minor;
    do{
        if(isCapicua(number)== number)
            break;
        number=number+1;
    }while(number<=major);

    if(isCapicua(number)== number)
        return console.log('The first capicua number is:',number);
    else
        return console.log('Dont exist capicua number in this range');
}

var isCapicua = function(number){
    var revnumb = parseInt(number.toString().split('').reverse().join(''));
    return revnumb;
}


var reverseString = function(str){
    var rev='';
    for(var i=str.length-1;i>=0;i--){
        rev += str[i];
    }
    return console.log(str, ', reversed is: ', rev);
}


var truncateWord = function(str,num){
    var trunc='';
    var count=0;
    do{
        trunc += str[count];
        count=count+1;
    }while(count<num);
    return console.log(str, ',truncated in ',num,' positions is: ', trunc);
}


var getPares = function(quantity){
    var counter = 0;
    var number =1;
    var array = new Array(quantity);
    do {
        if(!isPar(number)) {
            number=number+1;
            continue;
        }
        else {
            array[counter] = number;
            counter = counter + 1;
            number=number+1;
        }
    }while(counter<quantity)
    console.log(array.join());
}

var getImpares = function(quantity){
    var counter = 0;
    var number =1;
    var array = new Array(quantity);;
    do{
        if(isPar(number)) {
            number=number+1;
            continue;
        }
        else {
            array[counter] = number;
            counter = counter + 1;
            number=number+1;
        }
    }while(counter<quantity)
    console.log(array.toString());
}

var isPar = function(number){
    if((number%2)==0){
        return true;
    }
    return false;
}








