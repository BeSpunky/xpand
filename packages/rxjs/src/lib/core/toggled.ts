import { isObservable, Observable } from 'rxjs';
import { windowToggle             } from 'rxjs/operators';

type WindowOff<TOn, TOff> = Observable<TOff> | ((value: TOn) => Observable<TOff>);

export interface Toggles<TOn, TOff>
{
    on : Observable<TOn>;
    off: WindowOff<TOn, TOff>;
}

export function toggled<TValue, TOn, TOff>(observable: Observable<TValue>, { on, off }: Toggles<TOn, TOff>): Observable<Observable<TValue>>
{
    const closingSelector = isObservable(off) ? () => off : off;

    return observable.pipe(windowToggle(on, closingSelector));
}