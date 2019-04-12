var axios = require("axios");

function movieThis(userQuery) {
    this.userQuery = userQuery;

    if (userQuery == "") {
        userQuery = "Sin City";
    }
    this.movieSearch = function () {
        axios
            .get("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy")
            .then(function (response) {
                var movie = response.data;
                console.log(" - - -  Title - - -  ");
                console.log(movie.Title);
                console.log(" - - -  Released - - -  ");
                console.log(movie.Year);
                console.log(" - - -  IMDB Rating - - -  ");
                console.log(movie.imdbRating);
                console.log(" - - -  Rotten Tomatoes - - -  ");
                if (movie.Ratings.length <= 2) {
                    console.log("No Rotten Tomatoes Score");
                } else {
                    console.log(movie.Ratings[1].Value);
                }
                console.log(' - - -  Language - - -  ');
                console.log(movie.Language);
                console.log(' - - -  Plot - - -  ');
                console.log(movie.Plot);
                console.log(' - - -  Actors - - -  ');
                console.log(movie.Actors);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

// export results
module.exports = movieThis;
