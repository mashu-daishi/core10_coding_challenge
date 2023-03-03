'use strict';

const util = require( '../utils/swapi' );

module.exports = {
	route: '/totalPopulation',

	handler: async ( req, res ) => {
		try {
			let returnTotal = 0;

			// Calling the swapi utility to get a list of all the planets
			const allPlanets = await util.getAllFromPath( 'https://swapi.dev/api/planets' );
				
			allPlanets.forEach( planet => {
				if ( planet.population !== 'unknown' ) {
					returnTotal = returnTotal + Number( planet.population );
				}
			} );

			res.send( { 'total': returnTotal } );
		} catch ( e ) {
			console.error( e );

			res.status( 500 ).end()
		}
	}
}
