'use strict';
const isEmptyIterable = require('is-empty-iterable');

const pRace = async iterable => {
	if (isEmptyIterable(iterable)) {
		throw new RangeError('Expected the iterable to contain at least one item');
	}

	return Promise.race(iterable);
};

module.exports = pRace;
module.exports.default = pRace;
