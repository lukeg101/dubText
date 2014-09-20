// Require the twilio and HTTP modules
var twilio = require('twilio'),
    http = require('http');
	 
	 // Create an HTTP server, listening on port 1337, that
	 // will respond with a TwiML XML document
	 http.createServer(function (req, res) {
     // Create a TwiML response
     var resp = new twilio.TwimlResponse();
			  
     resp.say({voice:'woman'}, 'this is a callback');
								   
      //Render the TwiML document using "toString"
     res.writeHead(200, {'Content-Type':'text/plain'});
	 res.send(resp.toString());
	 res.end(req);
}).listen(process.env.PORT || 80);
															 
				
