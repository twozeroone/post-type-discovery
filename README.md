# post-type-discovery

A Javascript implementation of the [Post Type Discovery](https://www.w3.org/TR/post-type-discovery/) W3C spec.

[![Build Status](https://travis-ci.org/twozeroone/post-type-discovery.svg?branch=master)](https://travis-ci.org/twozeroone/post-type-discovery) [![Coverage Status](https://coveralls.io/repos/github/twozeroone/post-type-discovery/badge.svg?branch=master)](https://coveralls.io/github/twozeroone/post-type-discovery?branch=master) [![Inline docs](http://inch-ci.org/github/twozeroone/post-type-discovery.svg?branch=master)](http://inch-ci.org/github/twozeroone/post-type-discovery) [![devDependencies Status](https://david-dm.org/twozeroone/post-type-discovery/dev-status.svg)](https://david-dm.org/twozeroone/post-type-discovery?type=dev) [![dependencies Status](https://david-dm.org/twozeroone/post-type-discovery/status.svg)](https://david-dm.org/twozeroone/post-type-discovery) 

## Installation

Use [npm](https://www.npmjs.com/package/post-type-discovery) to install:

```
npm install post-type-discovery --save
```

## Usage

The library exposes just one method that tells you the type of a post given a parsed microformats JSON.

```js
var getType = require( 'post-type-discovery' );
var mf2 = { ...valid mf2 json... };

var type = getType( mf2 );
```

The code is small, easy to read, and [documented](http://post-type-discovery.js.org/).

## Contributing


Feel free to send pull requests, add test cases, and raise issues. To setup a development environment clone the repo and install dependencies.

```
$ npm install

# Lint, hint, and run tests
$ npm test 

# Run just the tests while developing
$ npm run jest -- --watch

# Build the docs
$ npm run docs
```
