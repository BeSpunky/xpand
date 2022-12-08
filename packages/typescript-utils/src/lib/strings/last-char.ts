export type LastChar<T> = T extends `${ string }${ infer Last }` ? Last : unknown;
