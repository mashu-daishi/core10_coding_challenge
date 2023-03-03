'use strict';

const _ = require( 'lodash' );

const util = require( '../utils/swapi' );

// This is the swapi film api for episode 1
const episode1Film = 'https://swapi.dev/api/films/4/';

module.exports = {
	route: '/episode1Species',

	handler: async ( req, res ) => {
		try {
			let returnList = [];
	
			// Calling the swapi utility to get a list of all the species
			const allSpecies = await util.getAllFromPath( 'https://swapi.dev/api/species' );
	
			
			allSpecies.forEach( species => {
				if ( species.films && _.includes( species.films, episode1Film ) ) {
					returnList.push( species.url );
				}
			} );
	
			res.send( returnList );
		} catch ( e ) {
			res.status( 500 ).end()
		}
	}
}
