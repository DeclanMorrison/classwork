// convert the code below to use the array methods instead of for loops
// you'll need to use the filter, reduce, map, and forEach methods

const princesses = [{ name: "Rapunzel", age: 18 }, { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 }, { name: "Moana", age: 16 }];

// log the name of each princess, follow by a colon, followed by their age
// can be replaced with forEach
princesses.forEach((value, index) => {
  console.log(`${value.name}: ${value.age}`);
});


// create an array of princess names from the existing array
// can be replaced with map
const names = princesses.map(value => value.name);
console.log("names: ", names);


// using the `names` array, get only those names that start with an 'M'
// can be replaced with filter
const mNames = names.filter(name => name[0] === "M");
console.log("m-names: ", mNames);


// get a single value from the data: the average age of all of the princesses
// Can be replaced with reduce
let sum = princesses.reduce((accumulator, currentValue) => {accumulator += currentValue.age});
console.log("average age: ", average);


// BONUS: get the average age of all princesses whose name includes an 'l'
const lNames = princesses.filter((value, index) => value.name.includes("l")).forEach((value, index) => {});
console.log("l-names: ", lNames);
