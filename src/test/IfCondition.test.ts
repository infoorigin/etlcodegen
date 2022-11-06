
import {transformerRepo} from '../app/liquid/transformer/lib';
import {LiquidTransformer} from '../app/liquid/transformer/interface';
import { parseTransformerKey } from '../app/liquid/utils/expr.parser';

test("IfElse Test ", () => {
    const ifexprn = 'if {shipTo} is present then {shipTo.name} else {billTo.name}';
    const key = parseTransformerKey(ifexprn);
    expect(transformerRepo[key]).toBeDefined();
    const iftransformer = new transformerRepo[key](ifexprn) as LiquidTransformer;
    expect(iftransformer).toBeDefined();
    const liquidtemplate = iftransformer.transform();
    expect(liquidtemplate).toBeDefined();
    console.log("liquidtemplate : ",liquidtemplate);    

});