import { Observable, MonoTypeOperatorFunction } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export function distinctArray<T>(): MonoTypeOperatorFunction<T[]> {
  return (source: Observable<T[]>) => {
    return source.pipe(
      distinctUntilChanged((previous: T[], current: T[]) => {
        console.log('goo')
        if (previous !== current || previous.length !== current.length) {
          return false;
        }

        for (let i = 0, length = previous.length; i < length; ++i) {
          if (previous[i] !== current[i]) {
            return false;
          }
        }

        return true;
      })
    );
  };
}
