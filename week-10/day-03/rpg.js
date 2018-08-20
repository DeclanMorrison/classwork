

function NewChar (n, p, g, a, s, hp) {
  this.stats = {
    name : n,
    profession : p,
    gender : g,
    age : a,
    strength : s,
    hitPoints : hp,
  };
  this.printStats = function () {
    let stats = this.stats;
    for (const prop in stats){
      console.log(stats[prop]);
    };
  };
};

const isAlive = (obj) => {
  if(obj.stats.hitPoints > 0){
    console.log(`${obj.stats.name} is alive.`);
  }else{
    console.log(`${obj.stats.name} is not alive. RIP.`);
  };
};

const attack = (att, def) => {
  def.stats.hitPoints -= att.stats.strength;
  console.log(`${att.stats.name} hits for ${att.stats.strength} points.`);
  console.log(`${def.stats.name}'s health is at ${def.stats.hitPoints} points.`);
};

const levelUp = (obj) => {
  obj.stats.age += 1;
  obj.stats.strength += 5;
  obj.stats.hitPoints += 25;
  obj.printStats();
};

console.log("~~~NEW CHARACTER, DARK BLAYD~~~");
const darkBlayd = new NewChar("Dark Blayd", "Badass", "Dude", "Older than time", 9001, 10);
darkBlayd.printStats();

console.log("~~~NEW CHARACTER, PINKU GUYDO~~~");
const pinkGuy = new NewChar("Pinku Guydo", "Bard", "Unknown", 24, 24, 24);
pinkGuy.printStats();

console.log("~~~IS PINKU GUYDO ALIVE?~~~");
isAlive(pinkGuy);

console.log("~~~DARK BLAYD ATTACKS PINKU GUYDO~~~");
attack(darkBlayd, pinkGuy);

console.log("~~~DARK BLAYD LEVELS UP~~~");
levelUp(darkBlayd);

console.log("~~~IS PINKU GUYDO ALIVE?~~~");
isAlive(pinkGuy);


