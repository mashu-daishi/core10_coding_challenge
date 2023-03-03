'use strict';

const got = require( 'got' );

const getAllFromPath = async ( path, totalResponses = [] ) => {
    const response = await getFromPath( path );

    response.results.forEach( res => {
        totalResponses.push( res );
    } );

    if ( response.next ) {
        await getAllFromPath( response.next, totalResponses );
    }

    return totalResponses;
};

const getFromPath = async ( path ) => {
    try {
        const response = await got( path, { json: true } );
        
        return response.body;
    } catch ( error ) {
        console.log('error:', error);
    }
}

module.exports = {
    getAllFromPath
}