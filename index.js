'use strict';
const isEmptyIterable = require('is-empty-iterable');

const pRace = iterable => {
	if (isEmptyIterable(iterable)) {
		return Promise.reject(new RangeError('Expected the input to contain at least one item'));
	}

	return Promise.race(iterable);
};

module.exports = pRace;
module.exports.default = pRace;
