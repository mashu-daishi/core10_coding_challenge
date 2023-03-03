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

        // From manual testing of the swapi, there are six different species classification for Episode 1: The Phantom Menace
        returnedVal.length.should.equal( 6 );

        // Rather than checking for all 6 specific species classifications, I'm going to be looking for two specific ones.
        returnedVal.should.containDeep( [
            'mammal',
            'unknown'
        ] );
    } );
} );