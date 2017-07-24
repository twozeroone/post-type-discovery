# post-type-discovery

A Javascript implementation of the [Post Type Discovery](https://www.w3.org/TR/post-type-discovery/) W3C spec.

[![Build Status](https://travis-ci.org/twozeroone/post-type-discovery.svg?branch=master)](https://travis-ci.org/twozeroone/post-type-discovery) [![Coverage Status](https://coveralls.io/repos/github/twozeroone/post-type-discovery/badge.svg?branch=master)](https://coveralls.io/github/twozeroone/post-type-discovery?branch=master) [![Inline docs](http://inch-ci.org/github/twozeroone/post-type-discovery.svg?branch=master)](http://inch-ci.org/github/twozeroone/post-type-discovery) [![devDependencies Status](https://david-dm.org/twozeroone/post-type-discovery/dev-status.svg)](https://david-dm.org/twozeroone/post-type-discovery?type=dev) [![dependencies Status](https://david-dm.org/twozeroone/post-type-discovery/status.svg)](https://david-dm.org/twozeroone/post-type-discovery)

### Installation

Use [npm](https://www.npmjs.com/package/post-type-discovery) to install:

```
npm install post-type-discovery --save
```

### Usage

The library exposes just one method that tells you the type of a post given a parsed microformats JSON.

```js
var getType = require( 'post-type-discovery' );

// You can get parsed mf2 using a library like microformat-shiv, or microformat-node
var mf2 = {"items":[{"type":["h-entry"],"properties":{"author":[{"type":["h-card"],"properties":{"name":["Tantek \u00c7elik"],"photo":["http://tantek.com/logo.jpg"],"url":["http://tantek.com/"]},"value":"Tantek \u00c7elik"}],"name":["\ud83d\udcd5 started reading \u201cThe Eight Limbs of Yoga\u201d by Stuart Ray Sarbacker and Kevin Kimple. tantek.com/isbn/086547768X #yoga"],"category":["yoga"],"url":["http://tantek.com/2017/200/t1/started-eight-limbs-of-yoga"],"uid":["http://tantek.com/2017/200/t1/started-eight-limbs-of-yoga"],"syndication":["https://twitter.com/t/status/887903244676214784"],"published":["2017-07-19T22:08-0700"],"updated":["2017-07-19T22:08-0700"],"content":[{"html":"\ud83d\udcd5 started reading \u201cThe Eight Limbs of Yoga\u201d by Stuart Ray Sarbacker and Kevin Kimple. <a class=\"auto-link\" href=\"http://tantek.com/isbn/086547768X\">tantek.com/isbn/086547768X</a> #<span class=\"p-category auto-tag\">yoga</span>","value":"\ud83d\udcd5 started reading \u201cThe Eight Limbs of Yoga\u201d by Stuart Ray Sarbacker and Kevin Kimple. tantek.com/isbn/086547768X #yoga"}]}}]};

// Get the post type
var type = getType( mf2 );
```

The code is small, easy to read, and [documented](http://post-type-discovery.js.org/).

### Contributing


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
