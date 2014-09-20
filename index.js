var express = require('express'),
	twilio = require('twilio'),
	body_parser = require('body-parser'),
	app = express(),
	client = twilio('AC37cb5af509c24ae9dbe5c01e48d1f412','048f0c1de0b8c3978539dac94ac0fe8d');

app.get('/', function(req, res){
	res.end('end');
});


app.get('/start',function(req, res){
	var resp = new twilio.TwimlResponse();
     // The TwiML response object will have functions on it that correspond
     // to TwiML "verbs" and "nouns". This example uses the "Say" verb.
     // Passing in a string argument sets the content of the XML tag.
     // Passing in an object literal sets attributes on the XML tag.
    resp.say({voice:'woman'}, 'ahoy hoy! Testing Twilio and node.js');
	  
     //Render the TwiML document using "toString"
   res.writeHead(200, {'Content-Type':'text/xml'});
	 res.end(resp.toString());
	);

app.listen(process.env.PORT || 80);
console.log('server started');
