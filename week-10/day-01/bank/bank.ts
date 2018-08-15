const fs = require("fs");

const total = () => {
  fs.readFile("bank.txt", "utf8", (err, data) => {
    if (err){
      return console.log(err);
    };

    let total = 0;
    data.split(",").forEach((value, index)=>{
      const int = parseFloat(value):10);
      console.log(int);
      total += int;
    });
    console.log(`$${Math.round((total*100))/100}`);
  });
};

const deposit = (amount) => {
  fs.appendFile("bank.txt", `, ${amount.toString(10)}`, (err, data) => {

    if (err){
      return console.log(err);
    };

    console.log(`$${amount} has been deposited.`);
  });
};

const withdraw = (amount) => {
  fs.appendFile("bank.txt", `, -${amount.toString(10)}`, (err, data) => {

    if (err){
      return console.log(err);
    };

    console.log(`$${amount} has been withdrawn.`);
  });
};

const lotto = (number) => {
  withdraw(2);
  const lucky = Math.floor(Math.random(1000)*100);
  if (number == lucky){
    console.log("You Win!");
    deposit(Math.floor(Math.random((15)+1)*1000));
  }else{
    console.log("You did not win!");
  };
};

switch (process.argv[2]){
  case ("help"):
    console.log(`
    total: Gives you the total of your account.
    deposit [amount]: Allows you to deposit an amount into your account.
    withdraw [amount]: Allows you to withdraw an amount from your account.
    lotto [number]: Play the lottery for $5! If your number matches the guessed number, you will win a random amount!
    `);
      break;
  case ("total"):
    total();
    break;
  case ("deposit"):
    deposit(process.argv[3]);
    break;
  case ("withdraw"):
    withdraw(process.argv[3]);
    break;
  case ("lotto"):
    lotto(process.argv[3]);
    break;
};