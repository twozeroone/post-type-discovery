var mf = require('microformat-node');
var validUrl = require('valid-url');

var getType = function ( html, callback ) {
  var o = { html: html };
  mf.get( o, function ( err,  data ) {
    var p = data.items[ 0 ].properties;

    // RSVP
    if (
      Object.keys( p ).includes( 'rsvp' ) &&
      (
        p.rsvp.includes( 'yes' ) ||
        p.rsvp.includes( 'no' ) ||
        p.rsvp.includes( 'maybe' ) ||
        p.rsvp.includes( 'interested' )
      )
    ) {
      callback( 'rsvp' );
      return;
    }

    // Reply
    if (
      Object.keys( p ).includes( 'in-reply-to' ) &&
      validUrl.isUri( p[ 'in-reply-to' ][ 0 ] )
    ) {
      callback( 'reply' );
      return;
    }

    callback( 'note' );
  } );
};

module.exports = getType;
