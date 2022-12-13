import test from 'ava';
import delay from 'delay';
import pRace from './index.js';

test('works like Promise.race()', async t => {
	t.is(await pRace([delay(50, {value: 1}), delay(100, {value: 2})]), 1);
});

test('handles empty Iterable', async t => {
	await t.throwsAsync(pRace([]), {instanceOf: RangeError});
});

if (globalThis.AbortController !== undefined) {
	test('abortsignal', async t => {
		let signalReference;

		t.is(await pRace(signal => {
			signalReference = signal;

			return [
				delay(50, {value: 1, signal}),
				delay(100, {value: 2, signal})
			];
		}), 1);

		t.true(signalReference.aborted);
	});

	test('abortsignal - should throw error', async t => {
		let signalReference;

		await t.throwsAsync(
			pRace(signal => {
				signalReference = signal;

				return [
					delay(50, {value: Promise.reject(new Error('some error')), signal}),
					delay(100, {value: 1, signal})
				];
			}), {
				message: 'some error'
			}
		);

		t.false(signalReference.aborted);
	});
}
