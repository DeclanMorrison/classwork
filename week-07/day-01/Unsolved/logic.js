var config = {
    apiKey: "AIzaSyDreHbFMtTOoeY-mlyIJDDHUE9s2-a8j1c",
    authDomain: "fir-project-9daca.firebaseapp.com",
    databaseURL: "https://fir-project-9daca.firebaseio.com",
    projectId: "fir-project-9daca",
    storageBucket: "fir-project-9daca.appspot.com",
    messagingSenderId: "942629520338"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
// var database = ...
const database = firebase.database();


// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
database.ref().on("value", function(snapshot){
  console.log(snapshot);
  clickCounter = snapshot.val().clickCount;
  $("#click-value").text(clickCounter);
}, function(errorObject){
  console.log("Something went wrong.");
});
// Console.log the "snapshot" value (a point-in-time representation of the database)
// This "snapshot" allows the page to get the most current values in firebase.


// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________

// Console Log the value of the clickCounter

// Change the HTML using jQuery to reflect the updated clickCounter value

// Then include Firebase error logging
// HINT: }, function(errorObject)

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  })

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
