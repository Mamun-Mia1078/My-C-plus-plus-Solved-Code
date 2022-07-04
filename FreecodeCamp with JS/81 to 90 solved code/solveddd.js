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


  //* 82 Return Early Pattern for Functions
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


  //*83 Build JavaScript Objects
  const myDogs = {
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

//85 *Accessing Object Properties with Bracket Notation

// Setup
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj2["an entree"];   // Change this line
const drinkValue = testObj2['the drink'];    // Change this line

//* 86Accessing Object Properties with Variables
// Setup
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
var  playerNumber = 16;  // Change this line
 var player = testObj3[playerNumber];   // Change this line

//*87 Updating Object Properties


 // Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name= 'Happy Coder';


//* 88 Add New Properties to a JavaScript Object



const myDogss = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDogss.bark= "geu geu";


//* 89 Delete Properties from a JavaScript Object
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

//* 90 Using Objects for Lookups
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
// After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.


  result = lookup[val];
  // Only change code above this line
  return result;
}