/**
 * AppUser
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

var AppUser = {

  attributes: {

  	/* e.g.
  	nickname: 'string'
  	*/
  	_id: {
			type: 'integer'
		},

		firstName: {
			type: 'string',
			required: true,
			defaultsTo: 'John'
		},

		lastName: {
			type: 'string',
			required: true,
			defaultsTo: 'Doe'
		}

  }

};

module.exports = AppUser;