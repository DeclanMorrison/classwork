const search = require("./module.js");

const args = process.argv;
args.shift();
args.shift();
const command = args.shift();

switch (command){
  case ("show"):
    search.show(args);
    break;

  case ("actor"):
    search.actor(args);
    break;
};