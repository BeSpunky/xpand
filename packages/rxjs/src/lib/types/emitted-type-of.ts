import { ObservableLike } from './observable-like';

/** Represents a type that extracts the type of value an observable emits. */
export type EmittedTypeOf<T> = T extends ObservableLike<infer TResolved> ? TResolved : never;