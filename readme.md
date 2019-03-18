# p-race [![Build Status](https://travis-ci.org/sindresorhus/p-race.svg?branch=master)](https://travis-ci.org/sindresorhus/p-race)

> A better [`Promise.race()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

This fixes the [silly behavior](https://github.com/domenic/promises-unwrapping/issues/75) of `Promise.race()` returning a forever pending promise when supplied an empty iterable, which could create some really hard to debug problems.

`Promise.race()` returns the first promise to fulfill or reject. Check out [`p-any`](https://github.com/sindresorhus/p-any) if you like to get the first promise to fulfill.


## Install

```
$ npm install p-race
```


## Usage

```js
const pRace = require('p-race');

Promise.race([]);
// Returns a forever pending promise…

pRace([]);
//=> [RangeError: Expected the input to contain at least one item]
```


## API

See the [`Promise.race()` docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).


## Related

- [p-any](https://github.com/sindresorhus/p-any) - Wait for any promise to be fulfilled
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
