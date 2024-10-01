/*
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

import Slice = require( '@stdlib/slice-ctor' );
import sliceLength = require( './index' );


// TESTS //

// The function returns a number...
{
	sliceLength( new Slice( 0, 10, 2 ) ); // $ExpectType number
	sliceLength( new Slice( null, null, -2 ) ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a slice object...
{
	sliceLength( '1' ); // $ExpectError
	sliceLength( 1 ); // $ExpectError
	sliceLength( true ); // $ExpectError
	sliceLength( false ); // $ExpectError
	sliceLength( null ); // $ExpectError
	sliceLength( undefined ); // $ExpectError
	sliceLength( [] ); // $ExpectError
	sliceLength( {} ); // $ExpectError
	sliceLength( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	sliceLength(); // $ExpectError
	sliceLength( new Slice( 0, 10, 2 ), 10 ); // $ExpectError
	sliceLength( new Slice( 0, 10, 2 ), 10, {} ); // $ExpectError
}
