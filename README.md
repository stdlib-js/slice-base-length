<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sliceLength

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the number of elements in a [normalized slice][@stdlib/slice/base/normalize-slice].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import sliceLength from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-length@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/slice-base-length/tags). For example,

```javascript
import sliceLength from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-length@v0.2.0-esm/index.mjs';
```

<a name="main"></a>

#### sliceLength( slice )

Returns the number of elements in a [normalized slice][@stdlib/slice/base/normalize-slice].

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';
import normalizeSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-slice@esm/index.mjs';

var s = normalizeSlice( new Slice( -3, null, -1 ), 10, false );
// returns <Slice>

var len = sliceLength( s );
// returns 8
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';
import normalizeSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-slice@esm/index.mjs';
import incrspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-incrspace@esm/index.mjs';
import sliceLength from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-length@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/slice-base-length.svg
[npm-url]: https://npmjs.org/package/@stdlib/slice-base-length

[test-image]: https://github.com/stdlib-js/slice-base-length/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/slice-base-length/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/slice-base-length/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/slice-base-length?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/slice-base-length.svg
[dependencies-url]: https://david-dm.org/stdlib-js/slice-base-length/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/slice-base-length/tree/deno
[deno-readme]: https://github.com/stdlib-js/slice-base-length/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/slice-base-length/tree/umd
[umd-readme]: https://github.com/stdlib-js/slice-base-length/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/slice-base-length/tree/esm
[esm-readme]: https://github.com/stdlib-js/slice-base-length/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/slice-base-length/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/slice-base-length/main/LICENSE

[@stdlib/slice/base/normalize-slice]: https://github.com/stdlib-js/slice-base-normalize-slice/tree/esm

</section>

<!-- /.links -->
