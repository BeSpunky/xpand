export type Tail<T> =
    T extends [ ...infer _, infer Last ]
    ? Last
    : unknown;
