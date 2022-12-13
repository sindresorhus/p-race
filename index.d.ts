type IterableOfPromiseLike<ValueType> = Iterable<ValueType | PromiseLike<ValueType>>;

/**
A better [`Promise.race()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).

This fixes the [silly behavior](https://github.com/domenic/promises-unwrapping/issues/75) of `Promise.race()` returning a forever pending promise when supplied an empty iterable, which could create some really hard to debug problems.

@example
```
import pRace from 'p-race';

Promise.race([]);
// Returns a forever pending promise…

pRace([]);
//=> [RangeError: Expected the input to contain at least one item]

pRace(signal => [
	fetch('/api', {signal}),
	setTimeout(10, {signal}),
]);
//=> Remaining promises other than first one will be aborted.
```
*/
export default function pRace<ValueType>(iterableOrExecutor: (IterableOfPromiseLike<ValueType>) | ((signal: AbortSignal) => IterableOfPromiseLike<ValueType>)): Promise<ValueType>;
