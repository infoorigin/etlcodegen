/* eslint-disable @typescript-eslint/no-explicit-any */
import {parseTransformerKey} from '../utils/expr.parser';
import { transformerRepo } from './transformer.repo';

export const IfElse = (exprn: string) => {
    const key = parseTransformerKey(exprn);
    console.log(' key :',key);
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function<T extends { new(...args: any[]): {}}>(target: T) {
        const clazz = class extends target {
            templateExpression:string;
            transformerKey:string
            constructor(...args: any[]) {
                super(...args);
                this.templateExpression = exprn;
                this.transformerKey = key;
            }
        }
        transformerRepo[key]= clazz;
        return clazz;
    }
}

