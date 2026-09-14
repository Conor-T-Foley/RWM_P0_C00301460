import {biggest as biggest} from '$lib/filters/biggestWithSameDigits';

import {sorts as peerSort} from 'peer-filter-c00301176';

export function combinedFilter(xs: number[]): number[] {
    const afterMine = biggest(xs);
    return peerSort(afterMine);
}