'use strict';

require( 'should' );

describe( 'GET /episode1Species', () => {
    const route = require( '../../routes/episode1Species' );

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
        route.route.should.equal( '/episode1Species' );
    } );

    it( 'should return correct array from handler', () => {
        returnedVal.should.be.an.Array();

        // From manual testing of the swapi, these are the twenty species for Episode 1: The Phantom Menace
        returnedVal.length.should.equal( 20 );

        // Rather than checking for all 20 specific species, I'm going to be looking for two specific ones: Zabrak (species 22) and Human (species 1)
        returnedVal.should.containDeep( [
            'https://swapi.dev/api/species/1/',
            'https://swapi.dev/api/species/22/'
        ] );
    } );
} );