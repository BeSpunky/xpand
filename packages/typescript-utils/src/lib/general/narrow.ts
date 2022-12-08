import { AnyFunction } from '../objects/any-function';
import { Primitive } from './primitive';

export type Narrow<T> =
    T extends Primitive | [] | AnyFunction
    ? T
    : { [ K in keyof T ]: Narrow<T[ K ]> };
