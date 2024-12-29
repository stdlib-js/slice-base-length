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

var Slice = require( '@stdlib/slice-ctor' );
var normalizeSlice = require( '@stdlib/slice-base-normalize-slice' );
var incrspace = require( '@stdlib/array-base-incrspace' );
var sliceLength = require( './../lib' );

var s1 = new Slice( 2, null, -1 );
var s2 = normalizeSlice( s1, 10, false );
var v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 2, 1, 0 ]'

s1 = new Slice( null, null, -3 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 9, 6, 3, 0 ]'

s1 = new Slice( null, 8, 3 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 0, 3, 6 ]'

s1 = new Slice( null, 8, null );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 0, 1, 2, 3, 4, 5, 6, 7 ]'

s1 = new Slice( -4, null, -2 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 6, 4, 2, 0 ]'

s1 = new Slice( null, 8, 3 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 0, 3, 6 ]'

s1 = new Slice( 8, 2, -2 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 8, 6, 4 ]'

s1 = new Slice( 3, 8, 2 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 3, 5, 7 ]'
