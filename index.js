var express = require('express'),
	twilio = require('twilio'),
	body_parser = require('body-parser'),
	app = express(),
	client = twilio('AC37cb5af509c24ae9dbe5c01e48d1f412','048f0c1de0b8c3978539dac94ac0fe8d');

app.get('/', function(req, res){
	res.end('end');
});


app.get('/start',function(req, res){
	console.log('get request received');
	var resp = new twilio.TwimlResponse();
	resp.say({voice:'woman'},'hello');
	res.writeHead({Content-Type:'text/xml'});
	res.end(resp.toString());
});

app.listen(process.env.PORT || 80);
console.log('server started');
