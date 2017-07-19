var assert = require('assert');
var getType = require('./index.js');
var fs = require( 'fs' );

var types = {
  rsvp: [ 'rsvp-tantek', 'rsvp-aaron' ],
  reply: [ 'reply-aaron' ]
};

Object.keys( types ).forEach( ( type ) => {
  describe( 'Posts of type - ' + type, () => {
    types[ type ].forEach( ( file ) => {
      it( 'should correctly categorize ' + file, ( done ) => {
        fs.readFile( __dirname + '/tests/' + file + '.html', 'utf-8', ( e ,d ) => {
          getType( d, ( t ) => {
            assert.equal( t, type );
            done();
          } );
        } );
      } );
    } );
  } );
} );
