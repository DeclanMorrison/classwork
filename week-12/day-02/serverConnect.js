const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  // port: "4200",
  user: "root",
  password: "SuperSecretPasswordHere",
  database: "new_database"
});

const login = function(){
  inquirer.prompt(
    [
      {
        type: "list",
        name: "loginMenu",
        message: "What would you like to do? ",
        choices: ["Login", "Add New User"]
      }
    ]
  ).then(function (answers) {
    switch (answers.loginMenu){
      case "Login":
        inquirer.prompt(
          [
            {
              type: "input",
              name: "username",
              message: "Username: "
            },
            {
              type: "password",
              name: "password",
              message: "Password: "
            }
          ]
        ).then(answers => {
          connection.query(`SELECT * FROM users`, function(err, res){
            res.forEach(function(value, index){
              if (value.u === answers.username && value.p === answers.password){
                console.log("Access Granted.");
                main();
              };
            })
          });
        });
        break;
      case "Add New User":
        inquirer.prompt(
          [
            {
              type: "input",
              name: "username",
              message: "Type a new username: "
            },
            {
              type: "password",
              name: "password",
              message: "Type a new password here: "
            },
            {
              type: "password",
              name: "passwordConfirm",
              message: "Please re-type password"
            }
          ]
        ).then(answers => {
          if (answers.password === answers.passwordConfirm){
            connection.query(`INSERT INTO users SET ?`, {
              u: answers.username,
              p: answers.password
            }, function(err, res){
              console.log("New user added.");
              login();
            });
          }else{
            console.log("Passwords do not match.")
            login();
          };
        });
        break;
    };
  });
};

const main = function() {
  inquirer.prompt(
    [
      {
        name: "menu",
        type: "list",
        message: "What would you like to do? ",
        choices: ["Display info", "Add info", "Update a row", "Delete a row", "Exit"]
      }
    ]
  ).then(function(answers){
    switch (answers.menu){
      case "Display info":
        Show();
        break;
      case "Add info":
        inquirer.prompt(
          [
            {
              name: "artistName",
              type: "input",
              message: "What is the artist's name? "
            },
            {
              name: "songTitle",
              type: "input",
              message: "What is the song's title? "
            },
            {
              name: "genre",
              type: "input",
              message: "What is the genre? "
            }
          ]
        ).then(function(answers){
          Add(connection, answers.songTitle, answers.artistName, answers.genre);
        });
        break;
      case "Update a row":
        inquirer.prompt(
          [
            {
              type: "input",
              name: "artistName",
              message: "Which artist would you like to edit? "
            },
            {
              type: "input",
              name: "songTitle",
              message: "What would you like to change the song to? "
            }
          ]
        ).then(function(answers){
          Update(connection, answers.songTitle, answers.artistName)
        })
        break;
      case "Delete a row":
        inquirer.prompt(
          [
            {
              type: "input",
              name: "songTitle",
              message: "What song would you like to delete? "
            }
          ]
        ).then(function(answer){
          Delete(connection, answer.songTitle);
        });
        break;
      case "Exit":
        process.exit();
        break;
        
    };
  });
};

const Add = function(connection, title, artist, genre) {
  connection.query(`INSERT INTO new_table SET ?`, [{
    title: title,
    artist: artist,
    genre: genre
  }], function(err, res) {
    if (err) console.error(err);
  });
  main();
};

const Update = function(connection, title, artist) {
  connection.query(`UPDATE new_table SET title=? WHERE artist=?`, [title, artist], function(err, res){
    if(err) console.error(err);
  });
  main();
};

const Delete = function(connection, title) {
  connection.query(`DELETE FROM new_table WHERE title=?`, [title], function(err, res){
    if(err) console.error(err);
  });
  main();
};

const Show = function() {
  connection.query(`SELECT * FROM new_table`, function (error, results, fields){
    results.forEach(function(value, index){
      console.log(`${value.title} by ${value.artist}. Genre: ${value.genre}`);
      console.log("");
    });
    main();
  });
};

login();