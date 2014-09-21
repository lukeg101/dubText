var express = require('express'),
	body_parser = require('body-parser'),
	twilio = require('twilio'),
	spawn = require('child_process').spawn,
	fs = require('fs'),
	app = express();

var client = new twilio.RestClient('AC37cb5af509c24ae9dbe5c01e48d1f412', '048f0c1de0b8c3978539dac94ac0fe8d');

/*client.sendSms({
		From:'+441522246127',
		To:'+447597576473',
		Body:'ya'
	}, function(err, data){
	if(!err){
		console.log(data.from + " " + data.body);
	} else {
		console.log(err);
	}
});*/

app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static('./public/'));
app.use(express.static('./dubstep/sound/'));

app.get('/upload', function(req, res){
	//get and parse data input
	console.log(req.query);//Body and From
	
	//pass in and run external command
	//spawn('./dubstep/chooseRandom.sh');
	//deliver text file response
	console.log(req.query.From);
	sendMsg(res, req.query.From);
});

app.get('/play', function(req, res){
	res.set('Content-Type','text/xml');
	console.log('yes');
	res.end('<Response><Play>./sound.mp3</Play></Response>');
});

app.listen(process.env.PORT || 80, console.log('server started'));

function sendMsg(res, dest){
	client.makeCall({
		to:dest,
		from:'+441522246127',
		url:'./play/'
	}, function(err, data){
		if(!err){
			console.log(data.from);
		} else {
			console.log(err);
		}
	});
}

