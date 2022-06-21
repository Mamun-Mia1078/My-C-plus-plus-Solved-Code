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

//*
  