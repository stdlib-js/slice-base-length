/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var tape = require( 'tape' );
var Slice = require( '@stdlib/slice-ctor' );
var normalizeSlice = require( '@stdlib/slice-base-normalize-slice' );
var sliceLength = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sliceLength, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the number of elements in a normalized slice', function test( t ) {
	var expected;
	var actual;
	var values;
	var len;
	var i;

	len = 10;

	values = [
		normalizeSlice( new Slice(), len, false ),
		normalizeSlice( new Slice( 10 ), len, false ),
		normalizeSlice( new Slice( 2, 10 ), len, false ),
		normalizeSlice( new Slice( 2, null ), len, false ),
		normalizeSlice( new Slice( null, 10 ), len, false ),
		normalizeSlice( new Slice( -2 ), len, false ),
		normalizeSlice( new Slice( -5, -2 ), len, false ),
		normalizeSlice( new Slice( -5, null ), len, false ),
		normalizeSlice( new Slice( null, null, null ), len, false ),
		normalizeSlice( new Slice( 2, 10, 2 ), len, false ),
		normalizeSlice( new Slice( -2, -10, -2 ), len, false ),
		normalizeSlice( new Slice( -2, -11, -2 ), len, false ),
		normalizeSlice( new Slice( null, 10, 2 ), len, false ),
		normalizeSlice( new Slice( 2, null, 2 ), len, false ),
		normalizeSlice( new Slice( 2, 10, null ), len, false ),
		normalizeSlice( new Slice( null, null, 2 ), len, false ),
		normalizeSlice( new Slice( 2, null, null ), len, false ),
		normalizeSlice( new Slice( null, 10, null ), len, false ),
		normalizeSlice( new Slice( -1, null, -2 ), len, false ),
		normalizeSlice( new Slice( 3, 3, 1 ), len, false ),
		normalizeSlice( new Slice( 5, 3, 1 ), len, false ),
		normalizeSlice( new Slice( 3, 5, -1 ), len, false ),
		normalizeSlice( new Slice( -5, -5, 1 ), len, false ),
		normalizeSlice( new Slice( 0, 0, 1 ), len, false ),
		normalizeSlice( new Slice( 10, 10, 1 ), len, false )
	];
	expected = [
		// Slice( 0, 10, 1 )
		[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],

		// Slice( 0, 10, 1 )
		[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],

		// Slice( 2, 10, 1 )
		[ 2, 3, 4, 5, 6, 7, 8, 9 ],

		// Slice( 2, 10, 1 )
		[ 2, 3, 4, 5, 6, 7, 8, 9 ],

		// Slice( 0, 10, 1 )
		[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],

		// Slice( 0, 8, 1 )
		[ 0, 1, 2, 3, 4, 5, 6, 7 ],

		// Slice( 5, 8, 1 )
		[ 5, 6, 7 ],

		// Slice( 5, 10, 1 )
		[ 5, 6, 7, 8, 9 ],

		// Slice( 0, 10, 1 )
		[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],

		// Slice( 2, 10, 2 )
		[ 2, 4, 6, 8 ],

		// Slice( 8, 0, -2 )
		[ 8, 6, 4, 2 ],

		// Slice( 8, null, -2 )
		[ 8, 6, 4, 2, 0 ],

		// Slice( 0, 10, 2 )
		[ 0, 2, 4, 6, 8 ],

		// Slice( 2, 10, 2 )
		[ 2, 4, 6, 8 ],

		// Slice( 2, 10, 1 )
		[ 2, 3, 4, 5, 6, 7, 8, 9 ],

		// Slice( 0, 10, 2 )
		[ 0, 2, 4, 6, 8 ],

		// Slice( 2, 10, 1 )
		[ 2, 3, 4, 5, 6, 7, 8, 9 ],

		// Slice( 0, 10, 1 )
		[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],

		// Slice( 9, null, -2 )
		[ 9, 7, 5, 3, 1 ],

		// Slice( 3, 3, 1 )
		[],

		// Slice( 5, 3, 1 )
		[],

		// Slice( 3, 5, -1 )
		[],

		// Slice( 5, 5, 1 )
		[],

		// Slice( 0, 0, 1 )
		[],

		// Slice( 10, 10, 1 )
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = sliceLength( values[ i ] );
		t.strictEqual( actual, expected[ i ].length, 'returns expected value. slice: ' + values[ i ].toString() );
	}
	t.end();
});
