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

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isCollection = require( '@stdlib/assert-is-collection' );
var resolveGetter = require( '@stdlib/array-base-resolve-getter' );
var format = require( '@stdlib/string-format' );
var logger = require( '@stdlib/console-log' );


// MAIN //

/**
* Inserts array element values into a format string and prints the result.
*
* @param {string} str - format string
* @param {...(Collection|*)} [args] - collections or values
* @throws {TypeError} first argument must be a string
* @throws {RangeError} provided collections must have the same length
* @returns {void}
*
* @example
* var x = [ 1, 2, 3 ];
* var y = [ 4, 5, 6 ];
*
* logEach( '%d < %d ', x, y );
* // e.g., => '1 < 4\n2 < 5\n3 < 6\n'
*
* @example
* var x = [ 0.5, 1.0, 1.5 ];
* var y = [ 0.25, 0.5, 0.75 ];
*
* logEach( '%0.2f > %0.2f', x, y );
* // e.g., => '0.50 > 0.25\n1.00 > 0.50\n1.50 > 0.75\n'
*
* @example
* var x = [ 'foo', 'bar' ];
* var y = [ 'beep', 'boop' ];
*
* logEach( 'x: %s, y: %s', x, y );
* // e.g., => 'x: foo, y: beep\nx: bar, y: boop\n'
*/
function logEach( str ) {
	var strides;
	var offsets;
	var getters;
	var values;
	var nargs;
	var args;
	var len;
	var v;
	var s;
	var i;
	var j;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	nargs = arguments.length;
	getters = [];
	strides = [];
	args = [];
	for ( i = 1; i < nargs; i++ ) {
		v = arguments[ i ];
		if ( isCollection( v ) ) {
			getters.push( resolveGetter( v ) );
			args.push( v );
			strides.push( 1 );
			len = v.length;
			i += 1;
			break;
		} else {
			v = [ v ];
			getters.push( resolveGetter( v ) );
			args.push( v );
			strides.push( 0 );
		}
	}
	if ( len === void 0 ) {
		len = 1;
	}
	for ( ; i < nargs; i++ ) {
		v = arguments[ i ];
		if ( isCollection( v ) ) {
			if ( v.length !== len ) {
				throw new RangeError( 'invalid argument. Provided collections must have the same length.' );
			}
			s = 1;
		} else {
			v = [ v ];
			s = 0;
		}
		getters.push( resolveGetter( v ) );
		args.push( v );
		strides.push( s );
	}
	values = [ str ];
	offsets = [];
	for ( i = 1; i < nargs; i++ ) {
		values.push( null );
		offsets.push( 0 );
	}
	for ( i = 0; i < len; i++ ) {
		for ( j = 0; j < nargs-1; j++ ) {
			values[ j+1 ] = getters[ j ]( args[ j ], offsets[ j ] );
			offsets[ j ] += strides[ j ];
		}
		logger( format.apply( null, values ) );
	}
}


// EXPORTS //

module.exports = logEach;
