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

var bench = require( '@stdlib/bench-harness' );
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var Slice = require( '@stdlib/slice-ctor' );
var normalizeSlice = require( '@stdlib/slice-base-normalize-slice' );
var pkg = require( './../package.json' ).name;
var sliceLength = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		normalizeSlice( new Slice( null, null, null ), 10, false ),
		normalizeSlice( new Slice( 0, 10, 2 ), 10, false ),
		normalizeSlice( new Slice( null, 10, 2 ), 10, false ),
		normalizeSlice( new Slice( 0, null, 2 ), 10, false ),
		normalizeSlice( new Slice( 0, 10, null ), 10, false ),
		normalizeSlice( new Slice( -20, -5, -2 ), 10, false ),
		normalizeSlice( new Slice( 5, 20, 2 ), 10, false ),
		normalizeSlice( new Slice( null, null, -1 ), 10, false ),
		normalizeSlice( new Slice( 5, -20, -2 ), 10, false ),
		normalizeSlice( new Slice( 20, null, -1 ), 10, false ),
		normalizeSlice( new Slice( 0, -2, 2 ), 10, false ),
		normalizeSlice( new Slice( -5, null, 2 ), 10, false )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = sliceLength( values[ i%values.length ] );
		if ( out !== out || out < 0 ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( out ) ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
