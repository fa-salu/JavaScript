//String
//string stores a series of characters (store text)
//indexs are zero-based

var text = 'Hello World';
console.log(text[0]);

// Js String Methods

//charAt
//returns the char at a specified index(position) in a string.

var text = 'Hello World';
console.log(text.charAt(1));

//concat
//This method  joins two or more strings
//return a new string 
//assignment operators use to joins string(+, +=).

var text = 'Good ';
var text1 = 'Morning';
console.log(text.concat(text1));

//LowerCase & UpperCase

var text = 'good';
console.log(text.toUpperCase());
var text1 = 'MORNING';
console.log(text1.toLowerCase());

//slice 
//accept negative value
//extracts a part of string
//return the extracted part in a new string

var text = 'Hello World';
console.log(text.slice(0, 5));

//split
//'' - separate each one char
// return array

var text = 'How are,you Guys';
console.log(text.split(' '));

//subSting 
//This methods extract characters and return substring

var text = 'Hello World';
console.log(text.substring(3, 6));

//subStr
//This method extracts a part of a string.
//accept negative value
//accept accept index then end length

var text = 'Hello World';
console.log(text.substr(3, 6));

//replace & replaceAll
//This methods searches a string for a value or a regExp.
//returns a new string with the vaues replaced.

var text = 'Hello Friends Hello';
console.log(text.replace('Hello', 'hai'));
console.log(text.replaceAll('Hello', 'Hai'));

//trim
//trimStart & trimEnd
//removes whitespaces from both sides of a string.

var Name = '  Hello World  ';
console.log(Name.trim());

var text2 = 'Hello World Hai    ';
console.log(text2.trimEnd());

var text1 = '    Hello World';
console.log(text1.trimStart());

// padStart & padEnd
// pads a string from the start.
// pads a string from the end.

var text = 'Hello';
var padStr = text.padStart(11, 'hi');
console.log(padStr);

var text1 = 'Hello';
var padEnd = text1.padEnd(11, 'Hi');
console.log(padEnd); 



let a = 10;
let b = "10";
console.log(a == b);
console.log(null !== undefined);
console.log(a == b);
console.log(null == undefined);



// Short Examples for String

//string examples
let str1 = new String("Hello, World!");
console.log(str1);
//charAt() : return the charcter at the specified index
let char = str1.charAt(0); // 'H'
console.log(char);
//toUpperCase(): Converts the entire string to uppercase.
let upperStr = str1.toUpperCase(); // 'HELLO, WORLD!'
console.log(upperStr);
//toLowerCase(): Converts the entire string to lowercase.
let lowerStr = str1.toLowerCase(); // 'hello, world!'
console.log(lowerStr);
//split(separator): Splits a string into an array of substrings.
let words = str1.split(' '); // ['Hello,', 'World!']
console.log(words);
//slice(start, end): Extracts a section of a string and returns it as a new string.
let substring = str1.slice(0, 5); // 'Hello'
console.log(substring);
//replace(searchValue, newValue): Replaces a substring with a new string.
let newStr = str1.replace("Hello", "Hai"); // 'Hello, Everyone!'
console.log(newStr);
//indexOf(searchValue): Returns the index of the first occurrence of the specified value, or -1 if not found.
let index = str1.indexOf("o"); // 7
console.log(index);
//trim(): Removes whitespace from both ends of the string.
let trimmedStr = str1.trim(); // 'Hello, World!' (if there was any leading or trailing whitespace)
console.log(trimmedStr);