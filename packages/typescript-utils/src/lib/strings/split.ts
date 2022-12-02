export type Split<S extends string, Separator extends string> =
    S extends ``
    ? []
    : S extends `${ Separator }${ infer Rest }`
        ? Split<Rest, Separator>
        : S extends `${ infer Part }${ Separator }${ infer Rest }`
            ? [ Part, ...Split<Rest, Separator> ]
            : S extends `${ infer Part }`
                ? [ Part ]
                : string[];
