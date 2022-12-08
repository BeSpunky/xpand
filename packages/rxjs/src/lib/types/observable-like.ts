import type { InteropObservable, Observable } from 'rxjs';

export type ObservableLike = Observable<unknown> | InteropObservable<unknown> | Promise<unknown>;
