/**
 * MoviesController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var MoviesController = {

  find: function (req, res) {

    var id = req.params.id;

    if(id) {

      Movie.find(id).done(function (error, movie) {

        if(error) {
          res.json(error);

        } else {
          var responseObject = { movie: movie[0]};
          res.json(responseObject, 200);

        }

      });

    } else {

      Movie.find().done(function(error, movies) {

        if(error) {

          console.log(error);
        } else {

          var responseObject = {movies: movies};
          res.json(responseObject, 200);
          console.log(responseObject.movies.length);
        }
      });

    }

  },

  create: function (req, res) {
  	res.send('Creating a new movie');
    var newMovie = req.params.body;

  	console.log(req.headers);
  },

  update: function (req, res) {
  	res.send('Update a existing movie');
  },

  delete: function (req, res) {
  	res.send('Delete a existing movie');
  }

};

module.exports = MoviesController;
