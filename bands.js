// requires
var axios = require("axios");
var moment = require("moment");

// Bands In Town function
var BandsInTown = function (userQuery) {
    this.userQuery = userQuery;
    if (userQuery == "") {
        userQuery = "Rüfüs Du Sol";
    }

    var URL = "https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp";
    this.concertThis = function (userQuery) {
        axios
            .get(URL)
            .then(function (response) {
                var count = Object.keys(response.data).length;
                console.log(count);
                if (response.length != 0) {
                    console.log(`Upcoming concerts for ${userQuery} include: `);

                    for (var i = 0; i < count; i++) {
                        var temp = response.data[i];
                        console.log("Venue name: " + temp.venue.name);
                        if (temp.venue.country == "United States") {
                            console.log(
                                "City: " + temp.venue.city + ", " + temp.venue.region
                            );
                        } else {
                            console.log(
                                "City: " + temp.venue.city + ", " + temp.venue.country
                            );
                        }
                        console.log("Date: " + moment(temp.datetime).format("MM/DD/YYYY"));
                        console.log();
                    }
                } else {
                    console.log(`${userQuery} has no upcoming concerts`);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    };
};

// export results
module.exports = BandsInTown;