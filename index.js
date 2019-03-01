var validUrl = require('valid-url');

/**
 * Gets the plain text value from a
 * value mf2 field.
 *
 * @private
 * @param {Array|Object} value Item from which value needs to be extracted
 * @return {String} Extracted value
 */
var getValue = function ( value ) {
  return value[ 0 ].value || value[ 0 ];
};

/**
 * Strip the content and name of non-alphanumeric
 * characters and check if the content includes the name.
 *
 * @private
 * @param {String} name Name property of the item
 * @param {String} content Content property of the item
 * @return {Boolean} Whether the content includes the name
 */
var contentIncludesName = function ( name, content ) {
  var trimmedName = name.replace(/\W+/g, ' ');
  var trimmedContent = content.replace(/\W+/g, ' ');
  return ( trimmedContent.indexOf( trimmedName ) !== -1 );
};

/**
 * Takes a microformat object and discovers its post type.
 *
 * @param {Object} mf2 Microformat2 object to be checked
 * @return {String} Type of post
 */
var getType = function ( mf2 ) {
  var prop = mf2.items[ 0 ].properties;
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

  var matches = Object.keys( propToType ).filter( function ( propName ) {
    return (
      propNames.includes( propName ) &&
      validUrl.isUri( getValue( prop[ propName ] ) )
    );
  } );

  if ( matches.length > 0 ) {
    return propToType[ matches[ 0 ] ];
  }

  // Are content and name the same?
  var name = prop.name ? getValue( prop.name ) : undefined;
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
