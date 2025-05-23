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
var tape = require( 'tape' );
var Complex128Array = require( '@stdlib/array-complex128' );
var logEach = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logEach, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string for the first argument (unary)', function test( t ) {
	var values;
	var i;

	values = [
		-3,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logEach( value );
		};
	}
});

tape( 'the function throws an error if not provided a string for the first argument (n-ary)', function test( t ) {
	var values;
	var i;

	values = [
		-3,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logEach( value, [ 1, 2, 3 ] );
		};
	}
});

tape( 'the function throws an error if not provided collections with the same length', function test( t ) {
	var values;
	var i;

	values = [
		[ 1, 2, 3 ],
		[ 4, 5 ],
		[ 6 ],
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logEach( '%d, %d', value, [ 1, 2, 3, 4 ] );
		};
	}
});

tape( 'the function prints a formatted message', function test( t ) {
	var expected;
	var logEach;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;
	expected = [ 'foo', 'foo', 'foo' ];

	for ( i = 0; i < expected.length; i++ ) {
		logEach( 'foo' );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function prints a formatted message for each element in an array', function test( t ) {
	var expected;
	var logEach;
	var values;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;

	values = [
		[ 1, 2, 3 ],
		[ 4, 5 ],
		[ 6 ],
		[ 'beep' ]
	];

	expected = [ '1', '2', '3', '4', '5', '6', 'beep' ];

	for ( i = 0; i < values.length; i++ ) {
		logEach( '%s', values[ i ] );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function prints a formatted message for each element in an array (accessors)', function test( t ) {
	var expected;
	var logEach;
	var values;
	var actual;
	var i;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	values = new Complex128Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );

	expected = [];
	for ( i = 0; i < values.length; i++ ) {
		expected.push( values.get( i ).toString() );
	}
	actual = [];

	logEach( '%s', values );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();

	function logger( str ) {
		actual.push( str );
	}
});

tape( 'the function prints a formatted message for each pair of array elements (two arrays)', function test( t ) {
	var expected;
	var logEach;
	var values;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;

	values = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ],
		[ 6 ],
		[ 'beep' ]
	];

	expected = [ '1, 4', '2, 5', '3, 6', '6, beep' ];

	for ( i = 0; i < values.length; i += 2 ) {
		logEach( '%s, %s', values[ i ], values[ i + 1 ] );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function repeatedly prints a formatted message (three arrays)', function test( t ) {
	var expected;
	var logEach;
	var values;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;

	values = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ],
		[ 7, 8, 9 ],
		[ 6 ],
		[ 'beep' ],
		[ 'boop' ]
	];

	expected = [ '1, 4, 7', '2, 5, 8', '3, 6, 9', '6, beep, boop' ];

	for ( i = 0; i < values.length; i += 3 ) {
		logEach( '%s, %s, %s', values[ i ], values[ i + 1 ], values[ i + 2 ]);
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function repeatedly prints a formatted message (four arrays)', function test( t ) {
	var expected;
	var logEach;
	var values;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;

	values = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ],
		[ 7, 8, 9 ],
		[ 'a', 'b', 'c' ],
		[ 6 ],
		[ 'beep' ],
		[ 'boop' ],
		[ 'ping' ]
	];

	expected = [ '1, 4, 7, a', '2, 5, 8, b', '3, 6, 9, c', '6, beep, boop, ping' ];

	for ( i = 0; i < values.length; i += 4 ) {
		logEach( '%s, %s, %s, %s', values[ i ], values[ i + 1 ], values[ i + 2 ], values[ i + 3 ]);
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function broadcasts non-array arguments (one array, one scalar)', function test( t ) {
	var expected;
	var logEach;
	var values;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;

	values = [
		[ 1, 2, 3 ],
		6,
		[ 4, 5 ],
		'beep'
	];

	expected = [ '1, 6', '2, 6', '3, 6', '4, beep', '5, beep' ];

	for ( i = 0; i < values.length; i += 2 ) {
		logEach( '%s, %s', values[ i ], values[ i + 1 ] );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function broadcasts non-array arguments (one scalar, one array)', function test( t ) {
	var expected;
	var logEach;
	var values;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;

	values = [
		6,
		[ 1, 2, 3 ],
		'beep',
		[ 4, 5 ]
	];

	expected = [ '6, 1', '6, 2', '6, 3', 'beep, 4', 'beep, 5' ];

	for ( i = 0; i < values.length; i += 2 ) {
		logEach( '%s, %s', values[ i ], values[ i + 1 ] );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function broadcasts non-array elements (two arrays, one scalar)', function test( t ) {
	var expected;
	var logEach;
	var values;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;

	values = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ],
		6,
		[ 4, 5 ],
		[ 9, 10 ],
		'beep'
	];

	expected = [ '1, 4, 6', '2, 5, 6', '3, 6, 6', '4, 9, beep', '5, 10, beep' ];

	for ( i = 0; i < values.length; i += 3 ) {
		logEach( '%s, %s, %s', values[ i ], values[ i + 1 ], values[ i + 2 ] );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function broadcasts non-array arguments (one scalar, two arrays)', function test( t ) {
	var expected;
	var logEach;
	var values;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;

	values = [
		6,
		[ 1, 2, 3 ],
		[ 4, 5, 6 ],
		'beep',
		[ 4, 5 ],
		[ 9, 10 ]
	];

	expected = [ '6, 1, 4', '6, 2, 5', '6, 3, 6', 'beep, 4, 9', 'beep, 5, 10' ];

	for ( i = 0; i < values.length; i += 3 ) {
		logEach( '%s, %s, %s', values[ i ], values[ i + 1 ], values[ i + 2 ] );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function prints a formatted message when provided only a scalar argument', function test( t ) {
	var expected;
	var logEach;
	var values;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;

	values = [
		1,
		4,
		6,
		5,
		'boop',
		'beep'
	];

	expected = [ '1', '4', '6', '5', 'boop', 'beep' ];

	for ( i = 0; i < values.length; i++ ) {
		logEach( '%s', values[ i ] );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function prints a formatted message when only provided two scalar arguments', function test( t ) {
	var expected;
	var logEach;
	var values;
	var i;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	j = 0;

	values = [
		1,
		4,
		6,
		5,
		'boop',
		'beep'
	];

	expected = [ '1, 4', '6, 5', 'boop, beep' ];

	for ( i = 0; i < values.length; i += 2 ) {
		logEach( '%s, %s', values[ i ], values[ i + 1 ] );
	}
	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});

tape( 'the function handles escaped percent signs (%%)', function test( t ) {
	var expected;
	var logEach;
	var j;

	logEach = proxyquire( './../lib/main.js', {
		'@stdlib/console-log': logger
	});

	expected = [
		'Progress: 100% complete',
		'Rate: 75% success',
		'50.0% + 25.0% = 75.0%',
		'5%2 = 1'
	];

	j = 0;

	logEach( 'Progress: 100%% complete' );
	logEach( 'Rate: %d%% success', 75 );
	logEach( '%0.1f%% + %0.1f%% = %.1f%%', 50.00, 25.00, 75.00 );
	logEach( '%d%%%d = %d', 5, 2, 1 );

	t.strictEqual( j, expected.length, 'returns expected value' );
	t.end();

	function logger( str ) {
		t.equal( str, expected[ j ], 'returns expected value' );
		j += 1;
	}
});
