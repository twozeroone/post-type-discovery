var mf = require('microformat-node');

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
  } );
};

module.exports = getType;
