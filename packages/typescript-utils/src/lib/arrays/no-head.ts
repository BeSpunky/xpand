export type NoHead<T> =
    T extends [ infer _, ...infer Rest ]
    ? Rest
    : unknown;
