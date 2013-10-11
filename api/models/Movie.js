/**
 * Test
 *
 * @module      :: Movie Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

var Movie = {
	attributes: {
		_id: {
			type: 'integer'
		},
		name: {
			type: 'string',
			required: true,
			defaultsTo: 'Sample Movie Name'
		},

    genres: {
      type: 'array',
      defaultsTo: ['Genre 1', 'Genre 2']
    },

    officialSite: {
      type: 'string',
      defaultsTo: 'Default official website'
    },

		/*
		showingDate: {
			type: 'array',
			required: true,
			defaultsTo: [{country: 'Sample Country', date: 'June 16'}]
		},

		movieStills: {
			type: 'array',
			required: true
		},

		movieCasts: {
			type: 'array',
			required: true,
			defaultsTo: [{
				name: 'Movie Cast Name',
				castImage: 'Image',
				role: 'Sample Role'
			}]
		},

		movieTrailer: {
			type: 'string',
			required: true,
			defaultsTo: 'Trailer'
		},

		movieDirector: {
			type:'string',
			required: true
		},

		moviePoster: {
			type: 'string',
			required: true,
			defaultsTo: 'trailer'
		}*/

		responseObject: function(response) {
			var response = { movies: response }
			return response;
		}
	}
}

module.exports = Movie;
