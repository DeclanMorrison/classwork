const dogs = {
  raining : true,
  noise : "woof",
  makeNoise : function () {
    console.log(this.noise);
  },
};

const cats = {
  raining : true,
  noise : "Meow",
  makeNoise : function () {
    console.log(this.noise);
  },
};

const massHysteria = (dogs, cats) => {
  const doggos = dogs;
  const cattos = cats;

  if (doggos.raining && cattos.raining){
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  };
};
dogs.makeNoise();
cats.makeNoise();
massHysteria(dogs, cats);