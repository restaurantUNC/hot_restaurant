var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var customers = [];
var waitlist = [];

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function(req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function(req, res) {
	res.sendFile(path.join(__dirname, 'reservation.html'))
});

app.get('/api/tables', function(req, res) {
	/*for (var i = 0; i < 4; i++) {
		res.json(customers[i]);
	}*/
	return res.json(customers);
});

app.get('/api/waitlist', function(req, res) {
	/*for (var i = 5; i < customers.length; i++) {
		res.json(customers[i]);
	}*/
	return res.json(waitlist);
});

app.post('/api/clear', function(req, res) {
	customers = [];
	waitlist = [];
});

app.post('/api/new', function(req, res) {
	console.log('Works');
	var newCustomer = req.body;
	if (customers.length >= 5) {
		waitlist.push(newCustomer);
	} else {
		customers.push(newCustomer);
	}
	res.json(newCustomer);
});

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
