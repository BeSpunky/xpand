import { AnyFunction } from './any-function';
import { AnyObject } from './any-object';
import { PropertiesOf } from './properties-of';

export type FunctionsOf<T extends AnyObject> = PropertiesOf<T, AnyFunction>;
