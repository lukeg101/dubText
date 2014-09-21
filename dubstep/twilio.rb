require 'rubygems'
require 'twilio-ruby'
require 'sinatra'

account_sid = "AC37cb5af509c24ae9dbe5c01e48d1f412"
auth_token = "048f0c1de0b8c3978539dac94ac0fe8d"
client = Twilio::REST::Client.new account_sid, auth_token
 
from = "+441522246127" # Your Twilio number

get '/sms-quickstart' do
	twiml = Twilio::TwiML::Response.new do |r|
    	r.Message "Hello, derp. Thanks for the message."
  	end
 	twiml.text
end

