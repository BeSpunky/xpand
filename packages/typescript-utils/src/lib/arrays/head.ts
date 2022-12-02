export type Head<T> =
    T extends [ infer First, ...infer _ ]
    ? First
    : unknown;