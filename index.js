//module dependencies

var express = require('express'),
	body_parser = require('body-parser'),
	child_process = require('child_process'),
	fs = require('fs'),
	app = express();

//middleware
app.use(body_parser.urlencoded({extended: false}));
app.use(express.static('./public'));


//pick up post request, generate files and send output
app.post('/', function(req, res){
	child_process.spawn('chooseRandom.sh');
	fs.readFile(function(err, data){
		if(!err){
			res.writeHead(200, {'Content-Type':'audio/mpeg'});
			res.end(data);
		} else {
			console.err(err);
		}
	});
});

app.listen(80);
