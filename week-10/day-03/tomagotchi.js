const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const Tomagotchi = function () {
  this.stats = {
    hungry : false,
    sleepy : true,
    bored : true,
    age : 0
  };
  this.feed = function () {
    if(this.stats.hungry){
      console.log("FEED ME NUTRIENTCE");
      this.stats.hungry = false;
    }else{
      console.log("NO FOOD, ONLY SOULS")
    };
  };

  this.sleep = function () {
    if(this.stats.sleepy){
      console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
      this.stats.sleepy = false;
      this.stats.bored = true;
      this.increaseAge();
    }else{
      console.log("THERE IS NO REST FOR THE HELL BEAST SUCH AS MYSELF");
    };
  };

  this.play = function () {
    if(this.stats.bored){
      console.log("PLAY WITH ME HUMAN");
      this.stats.bored = false;
    }else{
      console.log("I DO NOT DESIRE ACTIVITY AT THIS MOMENT");
    };
  };

  this.increaseAge = function () {
    this.stats.age++;
    console.log("ANOTHER YEAR ON THE AGE OF A TIMELESS BEING IS MEANINGLESS");
  };

};

const dog = new Tomagotchi();
dog.stats.outside = false;
dog.bark = function () {
  console.log("AHHHHHHHHHHHHHHHHHHHHHHH");
};

dog.goOutside = function () {
  if(!this.stats.outside){
    console.log("THE OUTDOORS ARE VILE. BURN EVERYTHING");
    this.stats.outside = true;
  }else{
    console.log("REMOVE ME FROM THIS WRETCHED ENVIRONMENT");
    this.stats.outside = false;
  };
};

dog.goInside = function () {
  if(this.stats.outside){
    console.log("YOU SHOULD BE ASHAMED OF YOUR LIVING SITUATION");
    this.stats.outside = false;
  }else{
    console.log("WE ARE INSIDE MORON");
  };
};

const cat = new Tomagotchi();

cat.stats.houseCondition = 100;
cat.meow = function () {
  console.log("No.");
};
cat.destroyFurniture = function () {
  this.stats.houseCondition -= 10;
  console.log("Those drapes weren't even that nice, Richard.");
};

cat.buyNewFurniture = function () {
  this.stats.houseCondition += 10;
};

consoleInput = function () {
  rl.question("What would you like to do? ", function(input){
    const inputs = input.split(" ");

    switch (inputs[0]){
      case "list":
        console.log("dog", "cat");
        break;

      case "dog":
        switch (inputs[1]){
          case "feed":
            dog.feed();
            break;
          case "sleep":
            dog.sleep();
            break;
          case "play":
            dog.play();
            break;
          case "bark":
            dog.bark();
            break;
          case "go":
            switch (inputs[2]){
              case "outside":
                dog.goOutside();
                break;
              case "inside":
                dog.goInside();
                break;
            };
            break;
          default:
            console.log("!!Unkown Input!!")
            console.log(`
            --------------------
            feed
            sleep
            play
            bark
            go outside
            go inside
            --------------------`);
        };
        break;

      case "cat":
        switch(inputs[1]){
          case "feed":
            cat.feed();
            break;
          case "sleep":
            cat.sleep();
            break;
          case "play":
            cat.play();
            break;
          case "meow":
            cat.meow();
            break;
          case "destroy":
            cat.destroyFurniture();
            break;
          case "buy":
            cat.buyNewFurniture();
            break;
          default:
            console.log("!!Unknown Input.!!")
            console.log(`
            --------------------
            feed
            sleep
            play
            meow
            destroy furniture
            buy new furniture
            --------------------`);
        };
        break;

      case "exit":
        throw "";
    };
    consoleInput();
  });
};
consoleInput();