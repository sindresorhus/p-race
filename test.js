import test from 'ava';
import delay from 'delay';
import m from './';

test('works like Promise.race()', async t => {
	t.is(await m([delay(50).then(() => 1), delay(100).then(() => 2)]), 1);
});

test('handles empty Iterable', async t => {
	await t.throws(m([]), RangeError);
});
