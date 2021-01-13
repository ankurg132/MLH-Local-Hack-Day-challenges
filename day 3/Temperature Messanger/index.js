var { accountSid,authToken,apiKey } = require('./auths');
let request = require('request');
const client = require('twilio')(accountSid, authToken);
const argv = require('yargs').argv;
let city = argv.c || 'Bhopal';
let recNum = argv.n || 'yournumberhere';

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
    } else {        
        let weather = JSON.parse(body)
        //console.log(body);
        let message = `It's a ${weather.weather[0].main} weather at a temperature of ${weather.main.temp} and it feels like ${weather.main.feels_like} degrees celsius in ${weather.name}!`;
        console.log(message);
        client.messages.create({
            body: message,
            from: '*', //your twilio sender number here in format [+][country code][number]
            to: recNum //this will be the number of reciever you typed in command line
        })
        .then(message => console.log(message.sid));
        }
});