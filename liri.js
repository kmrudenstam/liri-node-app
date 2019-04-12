// add the code required to import 
var BandsReq = require("./bands");
var SpotifyReq = require("./spotify");
var MovieReq = require("./movie");
var fs = require("fs");

// take user command and input
var userSearch = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

// app logic
function start() {
    if (userSearch === "concert-this") {
        var bands = new BandsReq(userQuery);
        bands.concertThis();
    } else if (userSearch === "spotify-this-song") {
        var spot = new SpotifyReq(userQuery);
        spot.songSearch();
    } else if (userSearch === "movie-this") {
        var movie = new MovieReq(userQuery);
        movie.movieSearch();
    } else if (userSearch === "do-what-it-says") {
        doWhatItSays();
    } else {
        console.log("I don't understand...");
    }

}

// function for do-what-it-says command
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, response) {
        if (error) {
            console.log(error);
        }
        let param = response.split(",");
        userSearch = param[0];
        userQuery = param[1];
        start();
    });
}

// call start function
start(userSearch, userQuery);