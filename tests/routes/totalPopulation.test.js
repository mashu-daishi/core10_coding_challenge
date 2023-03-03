'use strict';

require( 'should' );

describe( 'GET /totalPopulation', () => {
    const route = require( '../../routes/totalPopulation' );

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
        route.route.should.equal( '/totalPopulation' );
    } );

    it( 'should return correct object from handler', () => {
        returnedVal.should.be.an.Object();

        // I manually added up the total, and this is the value.
        returnedVal.should.have.property( 'total' ).and.equal( 1711401432500 );
    } );
} );