//*74 Chaining If Else Statements
function testSize(num) {
    // Only change code below this line
    if (num < 5) {
      return "Tiny";
    } else if (num < 10) {
      return "Small";
    } else if (num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "Large";
    } else {
      return "Huge";
    }
    // Only change code above this line
  }
  
  //*75 Golf Code
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

  function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
      return names[0];
    } else if (strokes <= par - 2) {
      return names[1];
    } else if (strokes === par - 1) {
      return names[2];
    } else if (strokes === par) {
      return names[3];
    } else if (strokes === par + 1) {
      return names[4];
    } else if (strokes === par + 2) {
      return names[5];
    } else {
      return names[6];
    }
    // Only change code above this line
  }
  
  // Change these values to test
  golfScore(5, 4);

  //* 76 Selecting from Many Options with Switch Statements
  function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
  
    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  caseInSwitch(1);
  

  //*77 Adding a Default Option in Switch Statements
  function switchOfStuff(val) {
    var answer = "";
  
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
  
    return answer;
  }


  //* 78 Multiple Identical Options in Switch Statements
  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  
  switch (val){
    case 1:
    case 2:
    case 3:
    answer = "Low";
    break;
      case 4:
    case 5:
    case 6:
     answer = "Mid";
     break;
       case 7:
    case 8:
    case 9:
    answer = "High";
  }
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);


  //* 79 Replacing If Else Chains with Switch


  
