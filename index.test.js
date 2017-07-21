var fs = require( 'fs' );
var expect = require( 'expect' );
var getType = require('./index.js');
var testsDir = './node_modules/post-type-discovery-tests/';

var tests = {};

// Find all the tests
fs.readdirSync( testsDir ).forEach( ( file ) => {
  if (
    file.indexOf( '.' ) !== 0 &&
    file.indexOf( '-' ) !== -1 &&
    file.indexOf( 'json' ) !== -1
  ) {
    var type = file.split( '-' )[ 0 ];
    var name = file.split( '-' )[ 1 ].split( '.' )[ 0 ];

    tests[ type ] = tests[ type ] || {};
    tests[ type ][ name ] = JSON.parse( fs.readFileSync( testsDir + file, 'utf-8' ) );
  }
} );

// Run 'em
describe( 'Post type discovery tests', () => {
  Object.keys( tests ).forEach( ( type ) => {
    describe( 'Type: ' + type, () => {
      Object.keys( tests[ type ] ).forEach( ( name ) => {
        it( 'should correctly categorize: ' + name, () => {
          expect( getType( tests[ type ][ name ] ) ).toEqual( type );
        } );
      } );
    } );
  } );
} );
