var assert = require('assert');
var getType = require('./index.js');
var fs = require( 'fs' );

var types = {
  rsvp: [ 'rsvp-tantek', 'rsvp-aaron' ],
  reply: [ 'reply-aaron' ]
};

Object.keys( types ).forEach( function ( type ) {
  describe( 'Posts of type - ' + type, function () {
    types[ type ].forEach( function ( file ) {
      it( 'should correctly categorize ' + file, function ( done ) {
        fs.readFile( __dirname + '/tests/' + file + '.html', 'utf-8', function( e ,d ) {
          getType( d, function ( t ) {
            assert.equal( t, type );
            done();
          } );
        } );
      } );
    } );
  } );
} );
