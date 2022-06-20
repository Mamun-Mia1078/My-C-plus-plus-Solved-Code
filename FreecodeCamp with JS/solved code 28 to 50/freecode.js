// problem from 28---50 solved code 

//* Concatenating Strings with Plus Operator 
const myStr = "This is the start." + " This is the end.";// Change this line

// *Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ['myArray',34];
// *Nest one Array within Another Array
const myArrays =[ ["Mamun",25], ["white box",55]];

//* Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// *Use Bracket Notation to Find the First Character in a String

let firstLetterOfLastName = "";
const lastNames = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line


//*Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Only change this line;
// Only change code above this line

//*Escape Sequences in Strings

var myStrs = "FirstLine\n\t\\SecondLine\nThirdLine";

//*Word Blanks
const myNouns = "dog";
const myAdjectives = "big";
const myVerbs = "ran";
const myAdverbs = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjectives + " " + myNouns + " " + myVerbs + " " + myAdverb + "."; // Only change this line;
// Only change code above this line

//*Understand String Immutability
// Setup
var myStrr = "Jello World";
// Only change code below this line
myStrr = "Hello World";

//*Concatenating Strings with the Plus Equals Operator
var myyStr = 'This is the first sentence. ';
myyStr +='This is the second sentence.';
//*Appending Variables to Strings
// Change code below this line
const someAdjective = "is easy";
let myStor = "Learning to code is ";
myStor += someAdjective;

//*Constructing Strings with Variables
// Only change code below this line
const myName = "I am well ";
var myStre = "My name is "+myName+ "who are you";
//*Use Bracket Notation to Find the Nth Character in a String

// Setup
const lastNamess = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastNamess[2]; // Change this line


//*Use Bracket Notation to Find the Last Character in a String
// Setup
const lastNamee = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastNamee[lastNamee.length -1]; // Change this line


//*Use Bracket Notation to Find the Nth-to-Last Character in a String

// Setup
const llastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = llastName[llastName.length-2]; // Change this line

//* Access Array Data with Indexes
const myArrayss = [50, 60, 70];
var myData = myArrayss[0];

//*Modify Array Data With Indexes
// Setup
const myArraay = [18, 64, 99];

// Only change code below this line
myArraay[0] = 45;


//*Access Multi-Dimensional Arrays With Indexes
const amyArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  
  
  const myData = amyArray[2][1];



  //*Manipulate Arrays With push()
const my0Array = [["John", 23], ["cat", 2]];
// Only change code below this line
my0Array.push(["dog",3]);


//*Manipulate Arrays With pop()
// Setup
const myArraay = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArraay.pop(1);

//*Manipulate Arrays With shift()

// Setup
const jmyArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = jmyArray.shift();

//*const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]);


//*Shopping List
const myList = [['icecream',33],['icecream',33],['icecream',33],['icecream',33],['icecream',33],];


//*Write Reusable JavaScript with Functions

function reusableFunction(){
  console.log('Hi World');
}
reusableFunction();


//* Passing Values to Functions with Arguments
function functionWithArgs(a,b){
  console.log(a+b);
  }
  functionWithArgs(1,2);
  functionWithArgs(7,9);
  
  
  
  
