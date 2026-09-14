import { describe, it, expect} from 'vitest';
import {biggest} from '../lib/filters';

describe('Biggest with same digit filter', () => {
    it ('Takes an integer sequence and returns the largest number that can be made with the individual digits of each number in the sequence', () => {
        const input = [12, 143, 471, 1010, 5678];
        const expected = [21, 431, 741, 1100, 8765];
        expect(biggest(input)).toEqual(expected);
    });
});


