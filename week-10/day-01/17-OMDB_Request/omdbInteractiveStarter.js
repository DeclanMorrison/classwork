// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...
const request = require("request");



// Grab or assemble the movie name and store it in a variable called "movieName"
let titleArray = process.argv;
titleArray.shift();
titleArray.shift();

const title = titleArray.join("+");
console.log(title);
// Then run a request to the OMDB API with the movie specified
var queryUrl = `http://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=trilogy`;


// This line is just to help us debug against the actual URL.
console.log(queryUrl);

// Then create a request to the queryUrl
request(queryUrl, (error, response, body) => {
  if (error){console.log("Something went wrong")};
  // console.log(response.statusCode);
  if (!error && response.statusCode === 200){
    console.log(`${JSON.parse(body).Title}`)
    console.log(`Released: ${JSON.parse(body).Released}`)
    console.log(`Rated: ${JSON.parse(body).Rated}`)
    console.log(`Genres: ${JSON.parse(body).Genre}`)
    console.log(`Plot: ${JSON.parse(body).Plot}`)
  };
});
