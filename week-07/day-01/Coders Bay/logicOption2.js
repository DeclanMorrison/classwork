// Initialize Firebase
  const config = {
    apiKey: "AIzaSyDreHbFMtTOoeY-mlyIJDDHUE9s2-a8j1c",
    authDomain: "fir-project-9daca.firebaseapp.com",
    databaseURL: "https://fir-project-9daca.firebaseio.com",
    projectId: "fir-project-9daca",
    storageBucket: "fir-project-9daca.appspot.com",
    messagingSenderId: "942629520338"
  };
  firebase.initializeApp(config);
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// Assign the reference to the database to a variable named 'database'
const database = firebase.database();


// Initial Values
const initialBid = 0;
const initialBidder = "No one :-(";
const highPrice = initialBid;
const highBidder = initialBidder;

const $bidder = $("#highest-bidder");
const $price = $("#highest-price");

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot){
  if (snapshot.val().highBidder !== null){
    $bidder.text(snapshot.val().highBidder);
    $price.text(snapshot.val().highPrice);

    console.log(snapshot.val().highBidder);
    console.log(snapshot.val().highPrice);
  }else{
    $bidder.text(highBidder);
    $price.text(highPrice);
  }
}, function(errorObject){
  console.log(`Error Handled: ${errorObject}`);
})

// If Firebase has a highPrice and highBidder stored (first case)


// Set the variables for highBidder/highPrice equal to the stored values in firebase.
// highPrice = ...
// highBidder = ...


// Change the HTML to reflect the stored values


// Print the data to the console.


// Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.


// Change the HTML to reflect the initial values


// Print the data to the console.




// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(){
  event.preventDefault();
  const $bidderName = $("#bidder-name").val();
  const $bidderPrice = $("#bidder-price").val();

  console.log($bidderName, $bidderPrice);

  if ($bidderPrice > $price.text()){
    alert("You are the highest bidder!");
    database.ref().set({
      highBidder: $bidderName,
      highPrice: $bidderPrice
    });
  }else{
    alert("You are not the highest bidder.");
  }
});
// Log the new High Price


// Store the new high price and bidder name as a local variable (could have also used the firebase variable)


// Change the HTML to reflect the new high price and bidder

// Else tell user their bid was too low via alert