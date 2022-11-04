<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isComplex128

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [128-bit complex number][@stdlib/complex/float64].



<section class="usage">

## Usage

```javascript
import isComplex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex128@esm/index.mjs';
```

#### isComplex128( value )

Tests if a value is a [128-bit complex number][@stdlib/complex/float64].

```javascript
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs';

var x = new Complex128( 1.0, 3.0 );

var bool = isComplex128( x );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs';
import isComplex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex128@esm/index.mjs';

var out = isComplex128( new Complex128( 3.0, 1.0 ) );
// returns true

out = isComplex128( new Complex64( 2.0, 2.0 ) );
// returns false

out = isComplex128( {} );
// returns false

out = isComplex128( null );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-complex`][@stdlib/assert/is-complex]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit or 128-bit complex number.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex64`][@stdlib/assert/is-complex64]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit complex number.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-complex128.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-complex128

[test-image]: https://github.com/stdlib-js/assert-is-complex128/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-complex128/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-complex128/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-complex128?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-complex128.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-complex128/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-complex128/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-complex128/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-complex128/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-complex128/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-complex128/main/LICENSE

[@stdlib/complex/float64]: https://github.com/stdlib-js/complex-float64/tree/esm

<!-- <related-links> -->

[@stdlib/assert/is-complex]: https://github.com/stdlib-js/assert-is-complex/tree/esm

[@stdlib/assert/is-complex64]: https://github.com/stdlib-js/assert-is-complex64/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
