import { AnyObject } from './any-object';

export type PropertiesOf<T extends AnyObject, TProperty> = {
    [key in keyof T]: T[key] extends TProperty ? key : never
}[ keyof T ];