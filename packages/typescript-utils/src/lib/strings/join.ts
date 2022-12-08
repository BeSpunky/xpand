export type Join<Strings extends string[], Separator extends string> =
    Strings extends [ infer S, ...infer Rest ]
    ? S extends string
        ? Rest extends string[]
            ? Rest[ 'length' ] extends 0
                ? S
                : `${ S }${ Separator }${ Join<Rest, Separator> }`
            : S
        : never
    : '';
