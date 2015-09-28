var countWords = function(par){
    var words = par.split(' ');
    return words.length;
}

console.log('Number of words is', countWords('Hello world'));



var printdate = function(){
    var now = new Date();
    var day = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];

    console.log('Today is:', day[now.getDay()]);

    var hour = now.getHours();
    if(now.getHours()>12)
        hour=hour-12 + ' PM';
    else
        hour=hour+' AM';
    console.log('Current time is:', hour, ':', now.getMinutes(), ':', now.getSeconds());
}

console.log(printdate());



/**var regExp = new RegExp(^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$);
regExp.test(2014-06-25);
regExp.test(12458965);**/

