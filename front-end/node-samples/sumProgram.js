var numbers = process.argv;
var total=0;

for(var i=2;i<numbers.length;i++)
{
	total = total + parseInt(numbers[i]);
}

console.log(total);