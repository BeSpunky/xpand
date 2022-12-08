export type NoTail<T> =
    T extends [ ...infer Rest, infer _ ]
    ? Rest
    : unknown;