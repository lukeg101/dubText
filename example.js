var twilio = require('twilio');
 
 // Create a new REST API client to make authenticated requests against the
 // twilio back end
 var client = new twilio.RestClient('AC37cb5af509c24ae9dbe5c01e48d1f412', '048f0c1de0b8c3978539dac94ac0fe8d');
  
  // Pass in parameters to the REST API using an object literal notation. The
  // REST client will handle authentication and response serialzation for you.
  client.sms.messages.create({
      To:'+447891198604',
      From:'+441522246127',
      Body:'ahoy hoy! Testing Twilio and node.js'
  }, function(error, message) {
    // The HTTP request to Twilio will run asynchronously. This callback
     // function will be called when a response is received from Twilio
     // The "error" variable will contain error information, if any.
     // If the request was successful, this value will be "falsy"
	 if (!error) {
     // The second argument to the callback will contain the information
	 // sent back by Twilio for the request. In this case, it is the
	  // information about the text messsage you just sent:
	 console.log('Success! The SID for this SMS message is:');
	 console.log(message.sid);
	 console.log('Message sent on:');
	 console.log(message.dateCreated);
	 } else {
      console.log(error);
       console.log('Oops! There was an error.');
	}
});

