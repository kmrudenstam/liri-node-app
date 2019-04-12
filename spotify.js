// reguires
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Spotify function
function spotifySongSearch(userQuery) {
    this.userQuery = userQuery;

    // Spotify search query format
    this.songSearch = function () {
        spotify.search({
            type: "track",
            query: userQuery,
            limit: 1
        }, function (error, data) {
            if (error) {
                return console.log("Error occurred: " + error);
            }
            var song = data.tracks.items[0];
            if (song != undefined) {
                console.log();
                console.log(" - - - Song - - - ");
                console.log(song.name);
                console.log(" - - - Artist - - - ");
                console.log(song.album.artists[0].name);
                console.log(' - - - Song Link - - - ');
                console.log(song.preview_url);
                console.log(' - - - Album - - - ');
                console.log(song.album.name);
            }
        });
    };
}

//export results
module.exports = spotifySongSearch;