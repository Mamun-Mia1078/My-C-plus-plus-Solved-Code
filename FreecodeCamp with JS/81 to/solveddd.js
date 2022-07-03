//* 81 Replacing If Else Chains with Switch

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }
    // Only change code above this line
    return answer;
  }
  // Change this value to test
  chainToSwitch(7);


  //* Return Early Pattern for Functions
  function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
      return undefined;
    }
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  // Change values below to test your code
  abTest(2, 2);


  //*Build JavaScript Objects
  const myDog = {
    // Only change code below this line
  name:'Kitty',
  legs:2,
  tails:6,
   friends : ["tommy","toran","toufiq"]
  
    // Only change code above this line
  };


  //83*Accessing Object Properties with Dot Notation
  // Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

//*
