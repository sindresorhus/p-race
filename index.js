import isEmptyIterable from 'is-empty-iterable';

export default async function pRace(iterable) {
	if (isEmptyIterable(iterable)) {
		throw new RangeError('Expected the iterable to contain at least one item');
	}

	return Promise.race(iterable);
}
