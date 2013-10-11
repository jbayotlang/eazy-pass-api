/**
 * AppUsersController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var AppUsersController = {

  find: function (req, res) {
  	var id = req.params.id;

  	if(id) {

  		AppUser.find(id).done(function (error, appUser) {

  			if(error) {

  				res.json(error);

  			} else {

          var responseObject = { appUser: appUser[0] };
          res.json(responseObject, 200);

          console.log(typeof responseObject);
  			}
  		});

  	} else {

  		AppUser.find().done(function (error, appUsers) {

  			if(error) {

  				res.json(error);

  			} else {

          var responseObject = { appUsers: appUsers };
  				res.json(responseObject, 200);
          console.log(responseObject.appUsers.length);
  			}

  		});
  	}
  },

  create: function (req, res) {
  	res.send('Create a new app user');
  },

  update: function (req, res) {
  	var id = req.params.id;

  	res.send('Update an app user with an id of ' + id);
  },

  delete: function (req, res) {
  	var id = req.params.id;

  	res.send('Delete an app user with an id of ' + id);
  }

};

module.exports = AppUsersController;
