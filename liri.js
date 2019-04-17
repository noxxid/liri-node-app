require("dotenv").config();
var axios = require("axios");

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var nodeArgs = process.argv;
var input = "";





for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        input = input + "+" + nodeArgs[i];
    } else {
        input += nodeArgs[i];
    }
}

var queryURL = "https://api.spotify.com/v1/search?q=" + input + "";

console.log(queryURL);

axios.get(queryURL).then(
    function (response) {
        console.log(response.data);
    });

