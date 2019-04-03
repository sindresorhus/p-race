declare const pRace: {
	/**
	A better [`Promise.race()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).

	This fixes the [silly behavior](https://github.com/domenic/promises-unwrapping/issues/75) of `Promise.race()` returning a forever pending promise when supplied an empty iterable, which could create some really hard to debug problems.

	@example
	```
	import pRace = require('p-race');

	Promise.race([]);
	// Returns a forever pending promise…

	pRace([]);
	//=> [RangeError: Expected the input to contain at least one item]
	```
	*/
	<ValueType>(iterable: Iterable<ValueType | PromiseLike<ValueType>>): Promise<
		ValueType
	>;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function pRace<ValueType>(
	// 	iterable: Iterable<ValueType | PromiseLike<ValueType>>
	// ): Promise<ValueType>;
	// export = pRace;
	default: typeof pRace;
};

export = pRace;
