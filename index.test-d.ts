import {expectType} from 'tsd-check';
import pRace from '.';

expectType<Promise<string>>(pRace(['foo', Promise.resolve('bar')]));
expectType<Promise<number>>(pRace(new Set([1, Promise.resolve(2)])));
