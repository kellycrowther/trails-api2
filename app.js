//bring in our dependencies

const app = require('express')();
var MongoClient = require('mongodb').MongoClient;
// var Mongoose = require("mongoose");
var db = require('./db')
const routes = require('./routes');


//connect all of our routes to our application
app.use('/', routes);

// ***** COMMON VARIABLES *****
let appPort = (process.env.PORT || 8080);
let connectionString = "mongodb://heroku_vsr9srk5:ndq03g7mtfsfo8hlnnfjsvfb1j@ds135382.mlab.com:35382/heroku_vsr9srk5";

app.set("port", appPort);

// Connect to Mongo on start
db.connect(connectionString, function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000...')
    })
  }
})

// ***** SERVER *****
// let portNumber = app.get("port");
// var server = app.listen(port, function() {
//   //debuggin purposes...
//   console.log("Connection String: ", connectionString);
//   console.log("Port: ", port);
//   console.log("Server Started...");
// })

//turn on server
// app.listen(3000, () => {
//   console.log("App listening on port 3000!!!");
// });
