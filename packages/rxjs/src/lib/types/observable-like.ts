import type { InteropObservable, Observable } from 'rxjs';

export type ObservableLike<T> = Observable<T> | InteropObservable<T> | Promise<T>;
