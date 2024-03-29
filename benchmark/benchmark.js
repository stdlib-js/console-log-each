/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var proxyquire = require( 'proxyquire' );
var bench = require( '@stdlib/bench-harness' );
var pkg = require( './../package.json' ).name;


// MAIN //

bench( pkg+'::no_collections', function benchmark( b ) {
	var logEach;
	var i;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		logEach( '%d, %d', i, i + 1 );
	}
	b.toc();
	b.pass( 'benchmark finished' );
	b.end();

	function logger( str ) {
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
});

bench( pkg+'::collections:len=1', function benchmark( b ) {
	var logEach;
	var i;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		logEach( '%d, %d', [ i ], [ i + 1 ] );
	}
	b.toc();
	b.pass( 'benchmark finished' );
	b.end();

	function logger( str ) {
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
});
