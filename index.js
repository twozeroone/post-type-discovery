var validUrl = require('valid-url');

var getType = ( mf, callback ) => {
  var p = mf.items[ 0 ].properties;

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

  // Repost
  if (
    Object.keys( p ).includes( 'repost-of' )
    // TODO: The value could be nested inside
    // validUrl.isUri( p[ 'repost-of' ][ 0 ] )
  ) {
    callback( 'repost' );
    return;
  }

  // Like
  if (
    Object.keys( p ).includes( 'like-of' )
    // TODO: The value could be nested inside
    // validUrl.isUri( p[ 'like-of' ][ 0 ] )
  ) {
    callback( 'like' );
    return;
  }

  callback( 'note' );
};

module.exports = getType;
