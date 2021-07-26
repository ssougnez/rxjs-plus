import { interval, from } from "rxjs";
import { count, map, take, tap } from "rxjs/operators";
import { distinctArray } from "../operators";

test('distincts the same array', () => {
    const array: number[] = [1, 2, 3];

    from([array, array, array])
        .pipe(
            distinctArray(),
            count()
            )
        .subscribe({
            next: c => () => expect(c).toBe(1)
        })
});

test('distincts with the same array that get mutated', () => {
    const array: number[] = [1, 2, 3];

    interval(100)
        .pipe(
            take(3),
            map(() => array),
            tap(() => array.push(array[array.length - 1] + 1)),
            distinctArray(),
            count()
        )
        .subscribe({
            next: c => expect(c).toBe(3)
        })
});

test('distincts different arrays', () => {
    const array1: number[] = [1, 2, 3];
    const array2: number[] = [1, 2, 3];
    const array3: number[] = [1, 2, 3];

    from([array1, array2, array3])
        .pipe(
            distinctArray(),
            count()
            )
        .subscribe({
            next: c => expect(c).toBe(3)
        })
});