const request = require("request");
const figlet = require("figlet");

const printName = function (name) {
  const fonts = figlet.fontsSync();
  const font = fonts[Math.floor(Math.random()*fonts.length)];

  console.log(figlet.textSync(name, {
      font: font,
      horizontalLayout: 'default',
      verticalLayout: 'default'
  }));
};

const show = function (array){
  const queryString = array.join("+");
  const queryURL = `http://api.tvmaze.com/search/shows?q=${queryString}`
  // console.log(queryURL);
  request(queryURL, function(err, res, body){
    // console.log(err);
    // console.log(res);
    const parsed = JSON.parse(body);
    printName(parsed[0].show.name);
    // console.log(parsed[0].show);
    console.log(`Show: ${parsed[0].show.name}`);
    console.log("")
    console.log(`Genre: ${parsed[0].show.genres}`);
    console.log("")
    console.log(`Rating: ${parsed[0].show.rating.average}`);
    console.log("")
    console.log(`Network: ${parsed[0].show.network.name}`);
    console.log("")
    console.log(`Summary: ${parsed[0].show.summary} `);
  });
};

const actor = function (array){
  const queryString = array.join("+");
  const queryURL = `http://api.tvmaze.com/search/people?q=${queryString}`
  // console.log(queryURL);
  request(queryURL, function(err, res, body){
    // console.log(err);
    // console.log(res);
    const parsed = JSON.parse(body);
    printName(parsed[0].person.name);
    // console.log(parsed[0]);
    console.log(`Actor: ${parsed[0].person.name}`);
    console.log("")
    console.log(`Birthday: ${parsed[0].person.birthday}`);
    console.log("")
    console.log(`Gender: ${parsed[0].person.gender}`);
    console.log("")
    console.log(`Country: ${parsed[0].person.country.name}`);
    console.log("")
    console.log(`URL: ${parsed[0].person.url} `);
  });
};

module.exports = {show, actor};