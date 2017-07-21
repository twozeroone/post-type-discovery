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
  var propNames = Object.keys( prop );

  // RSVP
  if (
    propNames.includes( 'rsvp' ) &&
    (
      prop.rsvp.includes( 'yes' ) ||
      prop.rsvp.includes( 'no' ) ||
      prop.rsvp.includes( 'maybe' ) ||
      prop.rsvp.includes( 'interested' )
    )
  ) {
    return 'rsvp';
  }

  // Properties that need to have a valid URL
  var propToType = {
    'in-reply-to': 'reply',
    'repost-of': 'repost',
    'like-of': 'like',
    'video': 'video',
    'photo': 'photo'
  };

  var matches = Object.keys( propToType ).filter( ( propName ) => {
    return (
      propNames.includes( propName ) &&
      validUrl.isUri( getValue( prop[ propName ] ) )
    );
  } );

  if ( matches.length > 0 ) {
    return propToType[ matches[ 0 ] ];
  }

  // Are content and name the same?
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
