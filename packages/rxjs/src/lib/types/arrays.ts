import type { InteropObservable, Observable } from 'rxjs';
import type { ObservableLike } from './observable-like';

export type ObservableLikeArray = ObservableLike[];

/** Represents an array of observables. */
export type ObservableArray = Observable<unknown>[];

/**
 * Constructs an tuple of the extracted emitted types in the received observable array.
 * This is is the reversed version of {@link ObservableTupleOf}.
 * 
 * For example, the following:
 * ```ts
 * EmittedTupleOf<[Observable<number>, Observable<string>, Observable<boolean>]>
 * ```
 * 
 * Will produce the following type:
 * ```ts
 * [number, string, boolean]
 * ```
 **/
export type EmittedTupleOf<T extends ObservableLikeArray> =
    T extends [Observable<infer T0> | InteropObservable<infer T0> | Promise<infer T0>, ...(infer TRest)]
        ? TRest['length'] extends 0
            ? [T0]
            // For some reason TS doesn't recognize TRest as ObservableLikeArray automatically even though T extends ObservableLikeArray
            // so it must be verified here again
            : TRest extends ObservableLikeArray 
                ? [T0, ...EmittedTupleOf<TRest>]
                : never
        : never;

/**
 * Constructs a tuple type where each element type wrapped with an observable.
 * This is is the reversed version of {@link EmittedTupleOf}.
 * 
 * For example, the following:
 * ```ts
 * ObservableTupleOf<[number, string, boolean]>
 * ```
 * 
 * Will produce the following type:
 * ```ts
 * [Observable<number>, Observable<string>, Observable<boolean>]
 * ```
 */
export type ObservableTupleOf<T extends unknown[]> =
    T extends [infer T0, ...(infer TRest)]
        ? TRest['length'] extends 0
            ? [Observable<T0>] 
            : [Observable<T0>, ...ObservableTupleOf<TRest>]
        : never;