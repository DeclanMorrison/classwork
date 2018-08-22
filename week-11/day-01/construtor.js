const ConstructorProgrammer = function (name, job, age, lang) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.lang = lang;
  this.print = () => {
    for (const prop in this){
      if ((typeof this[prop]) === "string"){
        console.log(this[prop]);
      };
    };
  };
};

const Me = new ConstructorProgrammer("Declan", "Imposter", "19", "C#");
Me.print();