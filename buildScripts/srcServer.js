var express = require('express'); //configure the web server that will serve up files in source directory
var path = require('path'); // reference to path
var open = require('open'); // open site in the browser

var port = 3000; // port to use (http://localhost:3000)
var app = express(); // express is the web server package. Configures the web server.

// tell express which routes to handle.
// anything requested from the root will use this function
app.get('/', function(req, res){
  // __dirname + path to the source directory, index.html is the beginning page.
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get("/hello", function(req, res){
  res.sendFile(path.join(__dirname, '../src/hello.html'));
});

// tell express to listen on port 3000
app.listen(port, function(err){
  // If there is an error open, give the error, otherwise open the website at the root page.
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

// run with node buildScripts/srcServer.js to run this script and open the first page
