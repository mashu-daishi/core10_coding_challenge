'use strict';

const _ = require( 'lodash' );

const util = require( '../utils/swapi' );

// This is the swapi person api for Luke Skywalker
const lukePerson = 'https://swapi.dev/api/people/1/';

module.exports = {
	route: '/lukesStarships',

	handler: async ( req, res ) => {
		try {
			let returnList = [];

			// Calling the swapi utility to get a list of all the starships
			const allStarships = await util.getAllFromPath( 'https://swapi.dev/api/starships' );

			// I'm going to make an assumption here and return a list of the REST apis of the ships Luke was a pilot of
			allStarships.forEach( ship => {
				if ( ship.pilots && _.includes( ship.pilots, lukePerson ) ) {
					returnList.push( ship.url );
				}
			} );

			res.send( returnList );
		} catch ( e ) {
			res.status( 500 ).end()
		}
	}
}
