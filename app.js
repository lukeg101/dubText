//Module dependencies

var express = require('express'),
	body_parser = require('body-parser'),
	twilio = require('twilio'),
	spawn = require('child_process').spawn,
	fs = require('fs'),
	app = express();

//variables
var client = new twilio.RestClient('AC37cb5af509c24ae9dbe5c01e48d1f412', '048f0c1de0b8c3978539dac94ac0fe8d');

//middleware and static serving
app.use(body_parser.urlencoded({ extended: false }));

//routes
app.get('/upload', function(req, res){
	//get and parse data input
	console.log(req.query);//Body and From
	
	//pass in and run external command
	spawn('./dubstep/chooseRandom.sh');
	//deliver text file response
	console.log(req.query.From);
	sendMsg(req.query.From);
});

app.post('/play', function(req, res){
	res.set('Content-Type','text/xml');
	console.log('yes');
	var rand = (Math.floor((Math.random()*20) %21) +1);
	console.log(rand);
	res.send('<Response><Play>http://dubtext.herokuapp.com/sound' + rand  + '.mp3</Play></Response>');
	res.end();
});

app.use(express.static('./public/'));
app.use(express.static('./dubstep/sound/'));

app.listen(process.env.PORT || 80, console.log('server started'));

//additionally functionality to compliment the routes
function sendMsg(dest){
	client.makeCall({
		to:dest,
		from:'+441522246127',
		url:'http://dubtext.herokuapp.com/play'
	}, function(err, data){
		if(!err){
			console.log(data.from);
		} else {
			console.log(err);
		}
	});
}

