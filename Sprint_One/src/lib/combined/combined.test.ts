import { describe, it, expect } from "vitest";
import { combinedFilter } from "./combined";

describe('combined (mine->peer)', () => {
    it('basic sequence', () => {
        const input = [12,23,45,56];
        const expected = [21,32,54,65];
        expect(combinedFilter(input)).toEqual(expected);
    });
});

it('edge cases', () => {
    expect(combinedFilter([])).toEqual([]);
    expect(combinedFilter([0])).toEqual([0]);
})