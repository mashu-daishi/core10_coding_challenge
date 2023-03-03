'use strict';

require( 'should' );

describe( 'GET /lukesStarships', () => {
    const route = require( '../../routes/lukesStarships' );

    let returnedVal;

    beforeAll( async () => {
        const reqFn = {
            send: ( returnVal ) => {
                returnedVal = returnVal
            }
        };

        await route.handler( {}, reqFn );
    } );

    it( 'should have the right route', () => {
        route.route.should.equal( '/lukesStarships' );
    } );

    it( 'should return correct array from handler', () => {
        returnedVal.should.be.an.Array();

        // From manual testing of the swapi, these are the two ships with Luke listed as a pilot
        returnedVal.length.should.equal( 2 );

        returnedVal.should.containDeep( [
            'https://swapi.dev/api/starships/12/',
            'https://swapi.dev/api/starships/22/'
        ] );
    } );
} );