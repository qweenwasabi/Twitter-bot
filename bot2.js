console.log("the bot lives");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var tweet = {
  status: '#codingrainbow from node.js'
};

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  if (err) {
    console.log('something went wronh');
  }else {
    console.log('it worked!');
 }
}
