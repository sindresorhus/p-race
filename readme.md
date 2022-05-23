# p-race

> A better [`Promise.race()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

Improvements:
- Fixes the [silly behavior](https://github.com/domenic/promises-unwrapping/issues/75) of `Promise.race()` returning a forever pending promise when supplied an empty iterable, which could create some really hard to debug problems. `Promise.race()` returns the first promise to fulfill or reject. Check out [`p-any`](https://github.com/sindresorhus/p-any) if you like to get the first promise to fulfill.
- Supports aborting promises using [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal).

## Install

```sh
npm install p-race
```

## Usage

```js
import pRace from 'p-race';

Promise.race([]);
// Returns a forever pending promise…

pRace([]);
//=> [RangeError: Expected the input to contain at least one item]
```

## API

### pRace(signal)

See the [`Promise.race()` docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).

#### signal

Type: [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

You can pass the `signal` object to abort remaining promises when resolve the first promise.

*Requires Node.js 16 or later.*

```js
import pRace from 'p-race';

pRace(signal => [
	signal => fetch('/api', {signal}),
	signal => setTimeout(10, {signal}),
]);
// Remaining promises other than first one will be aborted.
```

## Related

- [p-any](https://github.com/sindresorhus/p-any) - Wait for any promise to be fulfilled
- [More…](https://github.com/sindresorhus/promise-fun)
