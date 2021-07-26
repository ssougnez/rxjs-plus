import { distinctUntilChanged, map } from 'rxjs/operators';
export function filterArray(selector, distinct = true) {
    return (source) => {
        return source
            .pipe(map(array => array.filter(selector)), distinctUntilChanged((previous, current) => {
            if (distinct === false || previous.length !== current.length) {
                return false;
            }
            for (let i = 0, length = previous.length; i < length; ++i) {
                if (previous[i] !== current[i]) {
                    return false;
                }
            }
            return true;
        }));
    };
}
;
