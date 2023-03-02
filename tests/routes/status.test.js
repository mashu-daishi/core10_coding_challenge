'use strict';

require( 'should' );

describe( 'GET /status', () => {
    const route = require( '../../routes/status' );

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
        route.route.should.equal( '/status' );
    } );

    it( 'should return correct object in handler', () => {
        returnedVal.should.be.an.Object();
        returnedVal.should.have.property( 'packageName' );
        returnedVal.should.have.property( 'packageVersion' );
    } );
} );