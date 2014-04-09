// this is a comment

/* this is a
	multiline comment
	*/

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' + lastName;

var age = prompt('What is your age?');
age = parseInt(age);

if(age > 20)
{
	console.log('You can drink alcohol... legally');
}
else
{
	console.log('You are too young to drink!');
}

if(age >= 0 && age < 6) // Between 0 and 5
{
	console.log('Movies: G');
}
else if(age >= 6 && age < 13) // Between 6 and 12
{
	console.log('Movies: PG');
}
else if(age >= 13 && age < 18) // Between 13 and 17
{
	console.log('Movies: PG-13')
}
else // Over 17
{
	console.log('Movies: R');
}

var color = prompt('What is your favorite color?');
color = color.toLowerCase();

switch(color)
{
	case 'blue':
		console.log('Blue is awesome');
		break;
	case 'red':
		console.log('Red is awesome');
		break;
	case 'green':
		console.log('Green is awesome');
		break;
	default:
		console.log('I don\'t know that color');
}

var number = prompt('Enter a number');
number = number * 1;

if(number > 0 && number < 10)
{
	while(number < 50)
	{
		console.log('Number: ' + number);
		number += 2;
	}
}

for(var i = 0; i < 50; ++i)
{
	console.log('Number: ' + number);
}

var colors = [];

var response = prompt('Enter a color or (q)uit');
response = response.toLowerCase();

while(response !== 'q')
{
	colors.push(response);
	console.log(colors);
	response = prompt('Enter a color or (q)uit');
	response = response.toLowerCase();
}

var evens = [],
	odds = [];

for(var i = 0; i < 100; ++i)
{
	var remainder = i % 2;

	if(remainder === 0) // Even
	{
		var square = i * i;
		evens.push(square);
	}
	else // Odd
	{
		var cube = Math.pow(i, 3);
		odds.push(cube);
	}
}

console.log(evens);
console.log(odds);