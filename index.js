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
  var prop = mf.items[ 0 ].properties;

  // RSVP
  if (
    Object.keys( prop ).includes( 'rsvp' ) &&
    (
      prop.rsvp.includes( 'yes' ) ||
      prop.rsvp.includes( 'no' ) ||
      prop.rsvp.includes( 'maybe' ) ||
      prop.rsvp.includes( 'interested' )
    )
  ) {
    return 'rsvp';
  }

  // Reply
  if (
    Object.keys( prop ).includes( 'in-reply-to' ) &&
    validUrl.isUri( getValue( prop[ 'in-reply-to' ] ) )
  ) {
    return 'reply';
  }

  // Repost
  if (
    Object.keys( prop ).includes( 'repost-of' ) &&
    validUrl.isUri( getValue( prop[ 'repost-of' ] ) )
  ) {
    return 'repost';
  }

  // Like
  if (
    Object.keys( prop ).includes( 'like-of' ) &&
    validUrl.isUri( getValue( prop[ 'like-of' ] ) )
  ) {
    return 'like';
  }

  // Video
  if (
    Object.keys( prop ).includes( 'video' ) &&
    validUrl.isUri( getValue( prop[ 'video' ] ) )
  ) {
    return 'video';
  }

  // Photo
  if (
    Object.keys( prop ).includes( 'photo' ) &&
    validUrl.isUri( getValue( prop[ 'photo' ] ) )
  ) {
    return 'photo';
  }

  var name = getValue( prop.name );
  var content = getValue( prop.content ) || getValue( prop.summary );

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
