let numbersArray = process.argv;
numbersArray.shift();
numbersArray.shift();
numbersArray.sort((a, b)=>{return a-b});
numbersArray.forEach(element => {
  console.log(element);
});