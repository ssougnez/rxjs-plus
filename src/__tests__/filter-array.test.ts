import { of } from "rxjs";
import { filterArray } from "../operators";

test('filters an empty array', () => {
    const array: number[] = [];

    of(array)
        .pipe(filterArray(a => a % 2 === 0))
        .subscribe({
            next: arr => expect(arr.length).toBe(0)
        })
});

test('filters a non empty array with matches', () => {
    const array: number[] = [1, 2, 3, 4, 5, 6];

    of(array)
        .pipe(filterArray(a => a % 2 === 0))
        .subscribe({
            next: arr => expect(arr.length).toBe(3)
        })
});

test('filters a non empty array without matches', () => {
    const array: number[] = [1, 3, 5, 7, 9, 11];

    of(array)
        .pipe(filterArray(a => a % 2 === 0))
        .subscribe({
            next: arr => expect(arr.length).toBe(0)
        })
});
