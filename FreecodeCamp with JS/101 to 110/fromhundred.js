//*101 Iterate Through an Array with a For Loop
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}


//*102 Nesting For Loops



function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


//*103 Use the parseInt Function

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");


//*104 Use the parseInt Function with a Radix

function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");
//*105 Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
//*106