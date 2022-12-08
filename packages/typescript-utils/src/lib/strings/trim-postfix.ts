export type TrimPostfix<S extends string, Postfix extends string> =
    S extends `${ infer Trimmed }${ Postfix }`
    ? Trimmed
    : never;
