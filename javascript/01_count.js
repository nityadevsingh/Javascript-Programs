var tweet = prompt("Write your blog here");

var tweetcount = tweet.length;

alert("you have written " + tweetcount + " words and you have left " + 
            (140 - tweetcount) + "characters to write.")