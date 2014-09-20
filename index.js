var http = require('http'),
	twilio = require('twilio');

http.createServer(function(req, res){
	var resp = new twilio.TwimlResponse();
	resp.say({voice:'woman'},'Play that massive techno beat!');
}).listen(80);
console.log('Server started');
