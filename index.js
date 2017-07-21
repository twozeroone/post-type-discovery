var validUrl = require('valid-url');

var getValue = ( value ) => {
  return value[ 0 ].value || value[ 0 ];
};

var contentIncludesName = ( name, content ) => {
  name = name.replace(/\W+/g, ' ');
  content = content.replace(/\W+/g, ' ');
  return ( content.indexOf( name ) !== -1 );
};

var getType = ( mf ) => {
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
    return 'rsvp';
  }

  // Reply
  if (
    Object.keys( p ).includes( 'in-reply-to' ) &&
    validUrl.isUri( getValue( p[ 'in-reply-to' ] ) )
  ) {
    return 'reply';
  }

  // Repost
  if (
    Object.keys( p ).includes( 'repost-of' ) &&
    validUrl.isUri( getValue( p[ 'repost-of' ] ) )
  ) {
    return 'repost';
  }

  // Like
  if (
    Object.keys( p ).includes( 'like-of' ) &&
    validUrl.isUri( getValue( p[ 'like-of' ] ) )
  ) {
    return 'like';
  }

  // Video
  if (
    Object.keys( p ).includes( 'video' ) &&
    validUrl.isUri( getValue( p[ 'video' ] ) )
  ) {
    return 'video';
  }

  // Photo
  if (
    Object.keys( p ).includes( 'photo' ) &&
    validUrl.isUri( getValue( p[ 'photo' ] ) )
  ) {
    return 'photo';
  }

  var name = getValue( p.name );
  var content = getValue( p.content ) || getValue( p.summary );

  if (
    content !== undefined &&
    name !== undefined &&
    !contentIncludesName( name, content )
  ) {
    return 'article';
  }

  return 'note';
};

module.exports = getType;
