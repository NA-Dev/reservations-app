// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var reservation = [
  {
    customerName: "frank smith",
    phoneNumber: "123-123-1234",
    customerEmail: "frank@smith.com",
    customerID: 900
  },
  {
    customerName: "john smith",
    phoneNumber: "444-123-1234",
    customerEmail: "john@smith.com",
    customerID: 903
  },
  {
    customerName: "bob smith",
    phoneNumber: "555-123-1234",
    customerEmail: "bob@smith.com",
    customerID: 902
  }
];

var wait = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/api/clear", function(req, res) {
  reservation = [];
  wait = [];
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// show the reservation
app.get("/api/tables", function(req, res) {
  return res.json(reservation);
});

// show the waitlist
app.get("/api/waitlist", function(req, res) {
  return res.json(wait);
});


app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  //console.log(newReservation);
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  var myReservation = {};

  myReservation.customerName = newReservation.customerName;
  myReservation.phoneNumber = newReservation.phoneNumber;
  myReservation.customerEmail = newReservation.customerEmail;
  myReservation.customerID = newReservation.customerID;

  console.log(myReservation);

  if(reservation.length < 5)
  {
  	reservation.push(myReservation);
  	res.json(true);
  }
  else
  {
  	wait.push(myReservation);
  	res.json(false);
  }
});


// Starts the server to begin listening
// =============================================================*/
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});