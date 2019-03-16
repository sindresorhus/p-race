/**
A better [`Promise.race()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).

This fixes the [silly behavior](https://github.com/domenic/promises-unwrapping/issues/75) of `Promise.race()` returning a forever pending promise when supplied an empty iterable, which could create some really hard to debug problems.
*/
export default function pRace<ValueType>(
	iterable: Iterable<ValueType | PromiseLike<ValueType>>
): Promise<ValueType>;
