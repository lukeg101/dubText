var express = require('express'),
	twilio = require('twilio'),
	body_parser = require('body-parser'),
	app = express();


app.get('/',function(req, res){
	console.log('get request received');
	res.send('hello world');	
});

app.listen(process.env.port || 80);
console.log('server started');
