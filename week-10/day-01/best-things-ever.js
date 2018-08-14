const fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(error, data){
  if (error){
    return console.log(error);
  }

  const strings = data.split(",");
  strings.forEach(function(value, index){
    console.log(value);
  });
});