import { MonoTypeOperatorFunction } from 'rxjs';
export declare function filterArray<T>(selector: (item: T) => boolean, distinct?: boolean): MonoTypeOperatorFunction<T[]>;
