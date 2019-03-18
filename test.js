import test from 'ava';
import delay from 'delay';
import pRace from '.';

test('works like Promise.race()', async t => {
	t.is(await pRace([delay(50, {value: 1}), delay(100, {value: 2})]), 1);
});

test('handles empty Iterable', async t => {
	await t.throwsAsync(pRace([]), RangeError);
});
