# liri-node-app

LIRI is a Language Interpretation and Recognition Interface. Just like iPhone's Siri, LIRI is an app that takes in parameters and returns data. Unlike Siri, which uses spoken language, LIRI is a command line node app.

* **Technologies used:** Node.js, Javascript
* **APIs:** OMDB, Spotify, BandsInTown


# Instructions 
To use LIRI:
* Clone the repository.
* Run command "npm install" in Terminal.
* Run command "node liri.js" and one of the following commands:

Commands | Function
---------|---------
concert-this | uses the **bandsintown** API to take a band name from the user and returns that bands next concert
spotify-this | uses the **spotify** API to take a song name from the user and returns the artist, song name, spotify-link and album 
movie-this | uses the **OMDB** API to take a movie name and returns the name, cast, release year, IMDB and Rotten Tomatoes rating, country of origin, language and plot 
do-this | uses the built in **readFile()** method to access data from a prepopulated .txt file and return its information as a command/search query.

![image of concertThis](/screenshots/concert-this.png)
![image of concertThis](/screenshots/movie-this.png)
![image of concertThis](/screenshots/spotify-this.png)
![image of concertThis](/screenshots/do-what-it-says.png)
