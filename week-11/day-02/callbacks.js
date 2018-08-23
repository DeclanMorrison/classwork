const functionOne = function (string, callback) {
  console.log(string);
  callback();
};

const functionTwo = function (boolean, callback) {
  if (boolean){
    callback();
  };
};

const functionThree = function (callback, value){
  const result = callback(value);
  console.log(result);
};

const string = `I am a string!`;

const function1 = function () {
  console.log(`This is function one!`);
};

const bool = true;

const function2 = function () {
  console.log(`This is function two!`);
};

const value = 15;

const function3 = function (value) {
  value *= value;
  return value;
};

functionOne(string, function1);

functionTwo(bool, function2);

functionThree(function3, value);
