import { Observable, MonoTypeOperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export function filterArray<T>(selector: (item: T) => boolean): MonoTypeOperatorFunction<T[]> {
  return (source: Observable<T[]>) => {
    return source.pipe(map(array => array.filter(selector)));
  };
}
