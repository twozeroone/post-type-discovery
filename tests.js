var assert = require('assert');
var mf = require('microformat-node');
var getType = require('./index.js');
var fs = require( 'fs' );

var types = {
  rsvp: [ 'rsvp-tantek', 'rsvp-aaron' ],
  reply: [ 'reply-aaron' ],
  repost: [ 'repost-aaron' ],
  like: [ 'like-aaron' ],
  video: [ 'video-aaron' ],
  photo: [ 'photo-aaron' ]
};

Object.keys( types ).forEach( ( type ) => {
  describe( 'Posts of type - ' + type, () => {
    types[ type ].forEach( ( file ) => {
      it( 'should correctly categorize ' + file, ( done ) => {
        fs.readFile( __dirname + '/tests/' + file + '.html', 'utf-8', ( e ,d ) => {
          mf.get( { html: d }, ( error, data ) => {
            assert.equal( getType( data ), type );
            done();
          } );
        } );
      } );
    } );
  } );
} );
