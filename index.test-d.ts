import {expectType} from 'tsd';
import pRace = require('.');

expectType<Promise<string>>(pRace(['foo', Promise.resolve('bar')]));
expectType<Promise<number>>(pRace(new Set([1, Promise.resolve(2)])));
