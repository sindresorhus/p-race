'use strict';
const isEmptyIterable = require('is-empty-iterable');

module.exports = iterable => {
	if (isEmptyIterable(iterable)) {
		return Promise.reject(new RangeError('Expected the input to contain at least one item'));
	}

	return Promise.race(iterable);
};
