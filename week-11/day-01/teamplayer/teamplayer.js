const inquirer = require("inquirer");

let team = [];
let subs = [];
let teamNames = [];
let subNames = [];

const coinFlip = () => {
  const rand = Math.floor(Math.random(1)*2);
  return rand;
}

const ConstrPlayer = function (name, position, offense, defense) {
  const parsedOff = parseInt(offense, 10);
  const parsedDef = parseInt(defense, 10);
  this.stats = {
    name : name,
    pos : position,
    off : parsedOff,
    def : parsedDef
  };
  this.goodGame = () => {
    if (coinFlip() === 1){
      this.stats.off += 2;
      this.stats.def += 2;
    };
    input();
  };
  this.badGame = () => {
    if (coinFlip() === 1){
      this.stats.off -= 2;
      this.stats.def -= 2;
    };
    input();
  };
  this.printStats = () => {
    const self = this.stats;
    for (const prop in self){
      console.log(self[prop]);
    };
    input();
  };
};

const input = function () {
  inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "What would you like to do? ",
      choices: ["Make a new character", "Show the team", "Show the subs", "Sub in a player", "Exit"]
    }
  ]).then(function(response){
    switch (response.menu){
      case "Make a new character":
        newPlayer();
        break;
      case "Show the team":
        showTeam(team);
        break;
      case "Show the subs":
        showTeam(subs);
        break;
      case "Sub in a player":
        subPlayer();
        break;
      case "Exit":
        break;
    };
  });
};

const newPlayer = function () {
  if (team.length < 3){
    inquirer.prompt([
      {
        name: "name",
        message: "What is this players name? "
      },
      {
        name: "position",
        message: "What is this players position? "
      },
      {
        name: "offense",
        message: "What is this players offense stat? "
      },
      {
        name: "defense",
        message: "What is this players defense stat? "
      }
    ]).then(function(response){
      const newPlayer = new ConstrPlayer(response.name, response.position, response.offense, response.defense);
      if (team.length < 2){
        team.push(newPlayer);
        teamNames.push(response.name);
        input();
      }else if (team.length >= 2){
        subs.push(newPlayer);
        subNames.push(response.name);
        input();
      };
    });
  };
};

const showTeam = function (array) {
  array.forEach(function(value, index){
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
    for(const prop in value.stats){
      console.log(value.stats[prop]);
    };
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
  });
  input();
};

const subPlayer = function () {
  console.log(teamNames);
  inquirer.prompt([
    {
      type: "list",
      name: "out",
      message: "Which player would you like to sub out? ",
      choices: teamNames
    }
  ]).then(function(response){
    switch (response.out){
      case teamNames[0]:
        team.push(subs[0]);
        subs.pop;
        subs.push(team[0]);
        input();
        break;
      case teamNames[1]:
        team.push(subs[1]);
        subs.pop;
        subs.push(team[1]);
        input();
        break;
      default:
        input();
        break;
    };
  });
};

input();