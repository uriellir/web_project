var http = require('http');
var url = require('url');
var fs = require('fs');

var port = 3000;

var express = require('express')
var app = express()
var bp =require('body-parser');	//Library that helps parsing the body of the request to JSON

app.use(express.static(__dirname + '/'));

app.use(bp.json());
app.use(bp.urlencoded({ extended:false}));

var cors = require('cors'); //improve access to the server from all resources (WHY?)

app.use(cors()); //Use before all functions (WHY?)

var username = "admin";
var password = "admin";



//Open login.html page
app.get('/login.html', function (req, res) {
	
	var q = url.parse(req.url, true);
	console.log(q);
	var filename = "." + q.pathname;

  fs.readFile(filename, function(err, data) {
	  
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end("404 Not Found");
    }  
	
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
	 });
})



//app.get with '/ping' return response - 'pong'
app.post('/login',(req,res) => {
	if(req.body.username == username && req.body.password == password) {
		return res.json({
			result: 'success',
			error: null
		});
	}
	else{
		return res.json({
			result: null,
			error: "Username not found, please sign up first456"
		});
	}
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);

