//*Return a Value from a Function with Return

function timesFive(num){
    return num*5;
  }
  const answar = timesFive(5);
  
  //*Global Scope and Functions

  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }

  //* Local Scope and Functions

  
  function myLocalScope() {
    // Only change code below this line
   const myVar = "foo";
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  
  
  //*Global vs. Local Scope in Functions

  const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

//*Understanding Undefined Value returned from a Function

  // Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum +5;
}

// Only change code above this line

addThree(5);
 var res = addFive();
 
 //*Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

 //*Stand in Line
 function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  const removed = arr.shift();
  return removed;
  // Only change code above this line
  
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//*Understanding Boolean Values

function welcomeToBooleans() {
  // Only change code below this line
  return true; // Change this line

  // Only change code above this line
}


//*Use Conditional Logic with If Statements
// Setup
function trueOrFalse(wasThatTrue) {
  // Only change code below this line.

  if (wasThatTrue) {
    return "Yes, that was true";
  }else
  return "No, that was false";

  // Only change code above this line.
}

//*Comparison with the Equality Operator
// Setup
function testEqual(val) {
  if (val ==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//*Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//*Practice comparing different values

function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");