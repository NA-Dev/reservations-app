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
    name: "frank smith",
    phone: "123-123-1234",
    email: "frank@smith.com",
    id: 900
  },
  {
    name: "john smith",
    phone: "444-123-1234",
    email: "john@smith.com",
    id: 903
  },
  {
    name: "bob smith",
    phone: "555-123-1234",
    email: "bob@smith.com",
    id: 902
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
/*
// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});*/

// Starts the server to begin listening
// =============================================================*/
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

$(".submit").on("click", function(event) 
{

        // Preventing the submit button from trying to submit the form
        // We're optionally using a form so the user may hit Enter to search instead of clicking the button
        event.preventDefault();
        var jsonData = {};
        var formData = $("#form-group").serializeAarray();
        console.log(formData);
        // Here we grab the text from the input box
});

/*
        if(length($("#NYT-term").val()) > 0)
        {
        	var term = $("#NYT-term").val();
        	 // Here we construct our URL
        	queryURL = queryURL + term;
        	console.log(queryURL);
        }
        else
        {
        	console.log("no search term provided")
        }
        //how many articles will we show?
        var number = $("#NYT-number").val();
        console.log(number);
        if(length($("#NYT-startYear").val()) > 0)
        {
        	var startYear = $("#NYT-startYear").val();
        	 // Here we construct our URL
        	queryURL = queryURL + "&begin_date=" + startYear +"0101";
        	console.log(queryURL);
        }
        if(length($("#NYT-endYear").val()) > 0)
        {
        	var endYear = $("#NYT-endYear").val();
        	 // Here we construct our URL
        	queryURL = queryURL + "&end_date=" + endYear +"1231";
        	console.log(queryURL);
        }

        //ajax time!
        $.ajax(
        {
          url: queryURL,
          method: "GET"
        }).done(function(getStories)
        {
        	console.log(getStories.response.docs[0].headline.main);
        	console.log(getStories.response.docs[0].headline.main);
        	console.log(getStories.response.docs[0].headline.main);
        	console.log(JSON.stringify(getStories));
          //$("#movie-view").append(JSON.stringify(getMovie));
          //$(".panel-body").append('<br> <h1> Title:' + getMovie.Title + '</h1><br>');
          //$("#movie-view").append('<h1>Plot: </h1>' + getMovie.Plot + '<br>');
          //$("#movie-view").append("<img src= '" + getMovie.Poster + "'> <br>") ;
          //$("#movie-view").append('<br> <h1>Release Date: </h1>' + getMovie.Released + '<br>');
        });

        // =================================================================
});

*/