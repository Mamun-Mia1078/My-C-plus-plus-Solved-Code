//*91Counting Cards

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//* 92 Using Objects for Lookups

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


  //*93  Testing Objects for Properties

  
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}


//*94Manipulating Complex Objects
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  // Add record here
  {
    artist: "Deep Purple",
    title: "Smoke on the water",
    release_year: 1976,
    formats: ["CD", "8T", "LP"]
  }
];
//*95 Accessing Nested Arrays
// Setup
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1];



//*96 Iterate with JavaScript While Loops


// Setup
const myArray = [];

// Only change code below this line.
let i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

//* 97 Record Collection

// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


//*98 Iterate with JavaScript For Loops
var myArrayss = [];
for (var m = 1; m < 6; m++) {
  myArrayss.push(m);
}

//*99 Iterate Odd Numbers With a For Loop
// Setup
const myArrays = [];

// Only change code below this line
for (let i = 1 ; i< 10; i += 2){
  myArrays.push(i);
}

//* 100 Count Backwards With a For Loop
// Setup
const myyArray = [];

// Only change code below this line

for (let k = 9; k > 0; k -= 2) {
  myyArray.push(k);
}
// end this part 