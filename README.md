<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# logEach

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Insert array element values into a format string and print the result.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/console-log-each
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var logEach = require( '@stdlib/console-log-each' );
```

#### logEach( str\[, ...args] )

Inserts array element values into a format string and prints the result.

```javascript
var x = [ 1, 2, 3 ];
var y = [ 4, 5, 6 ];

logEach( '%d < %d ', x, y );
// e.g., => '1 < 4\n2 < 5\n3 < 6\n'
```

If an interpolated argument is not an array-like object, the argument is broadcasted for each iteration.

```javascript
var x = [ 1, 2, 3 ];
var y = 4;

logEach( '%d < %d', x, y );
// e.g., => '1 < 4\n2 < 4\n3 < 4\n'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the function is provided array-like objects of unequal lengths, the function throws an error.
-   The function supports array-like objects supporting the accessor protocol (e.g., [`Complex128Array`][@stdlib/array/complex128], [`Complex64Array`][@stdlib/array/complex64], etc).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var naryFunction = require( '@stdlib/utils-nary-function' );
var filledBy = require( '@stdlib/array-filled-by' );
var map = require( '@stdlib/utils-map' );
var abs = require( '@stdlib/math-base-special-abs' );
var logEach = require( '@stdlib/console-log-each' );

var rand = discreteUniform( -50, 50 );
var x = filledBy( 10, 'float64', rand );

var y = map( x, naryFunction( abs, 1 ) );
logEach( 'abs(%d) = %d', x, y );
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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/console-log-each.svg
[npm-url]: https://npmjs.org/package/@stdlib/console-log-each

[test-image]: https://github.com/stdlib-js/console-log-each/actions/workflows/test.yml/badge.svg?branch=v0.0.2
[test-url]: https://github.com/stdlib-js/console-log-each/actions/workflows/test.yml?query=branch:v0.0.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/console-log-each/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/console-log-each?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/console-log-each.svg
[dependencies-url]: https://david-dm.org/stdlib-js/console-log-each/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/console-log-each/tree/deno
[umd-url]: https://github.com/stdlib-js/console-log-each/tree/umd
[esm-url]: https://github.com/stdlib-js/console-log-each/tree/esm
[branches-url]: https://github.com/stdlib-js/console-log-each/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/console-log-each/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/stdlib

[@stdlib/array/complex64]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
