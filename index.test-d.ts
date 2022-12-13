import {expectType} from 'tsd';
import pRace from './index.js';

expectType<Promise<string>>(pRace(['foo', Promise.resolve('bar')]));
expectType<Promise<number>>(pRace(new Set([1, Promise.resolve(2)])));
expectType<Promise<string>>(pRace(() => ['foo', Promise.resolve('bar')]));
expectType<Promise<number>>(pRace(() => new Set([1, Promise.resolve(2)])));
