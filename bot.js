console.log("the bot lives");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);



// var params = {
//   q: 'Nintendo since:2017-04-27',
//   count: 10
// };
//
// T.get('search/tweets', params, gotData);
//
//
// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   for (var i=0; i < tweets.length; i++) {
//     console.log(tweets[i].text);
//   }
// }

var  options = {
   screen_name: 'Qween_Wasabi',
   count: 40
              };

T.get('statuses/user_timeline', options , function(err, data) {
  for (var i = 0; i < data.length ; i++) {
    console.log(data[i].text);
  }
});
