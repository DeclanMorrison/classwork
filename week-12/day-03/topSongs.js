const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  // port: "4200",
  user: "root",
  password: "SuperSecretPasswordHere",
  database: "top_songs"
});

const loginConn = mysql.createConnection({
  host: "localhost",
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
          loginConn.query(`SELECT * FROM users`, function(err, res){
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
            loginConn.query(`INSERT INTO users SET ?`, {
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
        choices: [
        "Display first 10", 
        "Display from artist", 
        "Display artists who appear more than once", 
        "Display between Year", 
        "Display album based on song",
        "Add info", 
        "Update a row", 
        "Delete a row", 
        "Exit"]
      }
    ]
  ).then(function(answers){
    switch (answers.menu){
      case "Display first 10":
        Show("10");
        break;
      case "Display from artist":
        inquirer.prompt(
          [
            {
              type: "input",
              name: "artist",
              message: "Which artist would you like to display from? "
            }
          ]
        ).then(answers => {
          Show("artist", answers.artist);
        });
        break;
      case "Display artists who appear more than once":
        Show(">1");
        break;
      case "Display between Year":
        inquirer.prompt(
            [
              {
                type: "input",
                name: "upper",
                message: "Enter the upper year: "
              },
              {
                type: "input",
                name: "lower",
                message: "Enter the lower year: "
              }
            ]
          ).then(answers => {
            Show("year", answers.upper, answers.lower);
          });
        break;
      case "Display album based on song":
        inquirer.prompt(
          [
            {
              type: "input",
              name: "song",
              message: "Which song would you like to search the album for? "
            }
          ]
        ).then(answers => {
          Show("album", answers.song);
        });
        break;
      case "Add info":
        inquirer.prompt(
          [
            {
              name: "artist",
              type: "input",
              message: "What is the artist's name? "
            },
            {
              name: "songName",
              type: "input",
              message: "What is the song's title? "
            },
            {
              name: "releaseYear",
              type: "input",
              message: "What year was it released? "
            }
          ]
        ).then(function(answers){
          Add(connection, answers.songName, answers.artist, answers.releaseYear);
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

const Add = function(connection, title, artist, release) {
  connection.query(`INSERT
                    INTO top_songs 
                    SET ?;`, [{
    title: title,
    artist: artist,
    release: release
  }], function(err, res) {
    if (err) console.error(err);
  });
  main();
};

const Update = function(connection, title, artist) {
  connection.query(`UPDATE top_songs 
                    SET songName=? 
                    WHERE artist=?;`,
  [title, artist],
  function(err, res){
    if(err) console.error(err);
  });
  main();
};

const Delete = function(connection, title) {
  connection.query(`DELETE
                    FROM top_songs 
                    WHERE songName=?;`,
  [title],
  function(err, res){
    if(err) console.error(err);
  });
  main();
};

const Show = function(filter, term, term2) {
  switch (filter){
    case ("10"):
      connection.query(`SELECT * 
                        FROM top_songs 
                        LIMIT 10;`,
      function (error, results, fields){
        results.forEach(function(value, index){
          console.log(`${value.songName} by ${value.artist}. Released: ${value.releaseYear}. Overall Score: ${value.score}`);
          console.log("");
        });
      });
      main();
      break;
    case ("artist"):
      connection.query(`SELECT * 
                        FROM top_songs 
                        WHERE artist=?;`,
      [term],
      function (error, results, fields){
        results.forEach(function(value, index){
          console.log(`${value.songName} by ${value.artist}. Released: ${value.releaseYear}. Overall Score: ${value.score}`);
          console.log("");
        });
      });
      main();
      break;
    case (">1"):
      connection.query(`SELECT artist 
                        FROM top_songs 
                        GROUP BY artist 
                        HAVING COUNT(*) > 1;`,
      function (error, results, fields){
        results.forEach(function(value, index){
          connection.query(`SELECT * 
                            FROM top_songs 
                            WHERE artist=?;`,
          [value.artist],
          function (error, results, fields){
            results.forEach(function(value, index){
              console.log(`${value.songName} by ${value.artist}. Released: ${value.releaseYear}. Overall Score: ${value.score}`);
              console.log("");
            });
          });
        });
      });
      main();
      break;
    case ("year"):
      connection.query(`SELECT * 
                        FROM top_songs 
                        WHERE releaseYear 
                        BETWEEN ? and ?;`,
      [term, term2],
      function (error, results, fields){
        results.forEach(function(value, index){
          console.log(`${value.songName} by ${value.artist}. Released: ${value.releaseYear}. Overall Score: ${value.score}`);
          console.log("");
        });
      });
      main();
      break;
    case ("album"):
      connection.query(`SELECT * 
                        FROM top_songs 
                        WHERE songName=?;`,
      [term],
      function (error, results, fields){
        results.forEach(function(value, index){
          connection.query(`SELECT * 
                        FROM top_albums 
                        WHERE artist=? AND releaseYear=?;`,
          [value.artist, value.releaseYear],
          function (error, results, fields){
            results.forEach(function(value, index){
              console.log(`${value.albumName} by ${value.artist}. Released: ${value.releaseYear}. Overall Score: ${value.score}`);
              console.log("");
            });
          });
        });
      });
      main();
      break;
  };
};

login();