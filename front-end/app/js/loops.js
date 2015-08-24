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


var getPares = function(quantity){
    var counter = 0;
    var number =1;
    var array = new Array(quantity);
    do{
        if(isPar(number)) {
            array[counter] = number;
            counter=counter+1;
        }
        number=number+1;
    }while(counter<quantity)
    console.log(array.join());
}

var getImpares = function(quantity){
    var counter = 0;
    var number =1;
    var array = new Array(quantity);;
    do{
        if(!isPar(number)) {
            array[counter] = number;
            counter=counter+1;
        }
        number=number+1;
    }while(counter<quantity)
    console.log(array.toString());
}

var isPar = function(number){
    if((number%2)==0){
        return true;
    }
    return false;
}








