import { Observable } from 'rxjs';
import { tap        } from 'rxjs/operators';

export function debug<T>(message?: string | number | ((value: T) => any)): (source: Observable<T>) => Observable<T>
{
    const log =
        message
        ? message instanceof Function
            ? (value: T) => console.log(message(value))
            : () => console.log(message)
        : (value: T) => console.log(value);

    return (source: Observable<T>) => source.pipe(tap(log));
}