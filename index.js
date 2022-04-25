import isEmptyIterable from 'is-empty-iterable';

const toIterable = (executorOrIterable, signal) => {
	return typeof executorOrIterable === 'function' ? executorOrIterable(signal) : executorOrIterable;
};

export default async function pRace(executorOrIterable) {
	const abortController = globalThis.AbortController ? new AbortController() : undefined;

	const iterable = toIterable(executorOrIterable, abortController?.signal);

	if (isEmptyIterable(iterable)) {
		throw new RangeError('Expected the iterable to contain at least one item');
	}

	const result = await Promise.race(iterable);
	abortController?.abort();
	return result;
}
