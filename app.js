const app  = require( 'express' )();
const glob = require( 'glob' );
const path = require( 'path' );

const port = 2187;

const routes = glob.sync( path.join( __dirname, 'routes/**/*.js' ) );

routes.forEach( item => {
    const route = require( item );

    app.get( route.route, route.handler );
} );

app.listen( port );

console.log( 'App Listening on Port ' + port );