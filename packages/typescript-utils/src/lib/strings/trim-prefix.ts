export type TrimPrefix<S extends string, Prefix extends string> =
    S extends `${ Prefix }${ infer Trimmed }`
    ? Trimmed
    : never;
