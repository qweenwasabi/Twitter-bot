console.log("the bot lives");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg) {
  console.log('follow bot activated');
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt("@" + screenName + " thanks for the follow");
}


tweetIt();

function tweetIt() {

  // var r = Math.floor(Math.random()*100);

  var tweet = {
    status: 'still playing with twitter bot'
  };

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log('something went wrong');
    }else {
      console.log('it worked!');
   }
  }
}




// setInterval(tweetIT, 1000*60*60) tweet once an hour
