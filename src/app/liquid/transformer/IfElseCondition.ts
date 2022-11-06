import {IfLiquidTransformer} from './interface'
import {IfElse} from './decorator';
import {parseExpressionVariables} from '../utils/expr.parser';

const IFTEMPLATE = '{% if $PLACEHOLDER$ %}';
const PLACEHOLDER = '$PLACEHOLDER$';
const ENDIFTEMPLATE = '{% endif %}';
const ELSETEMPLATE = '{% else %}';

@IfElse('if {arg1} is present then {arg2} else {arg3}')
export class IfElseCondition implements IfLiquidTransformer{
    private _expression:string;
    private _ifexpr:string;
    private _elseexpr:string;
    private _thenexpr:string;
    

    constructor(exprn:string){
        this._expression = exprn;
        this._parse();
    }

    public get ifexpr(){
        return this._ifexpr;
    }

    public get expression(){
        return this._expression;
    }

    public get elseexpr(){
        return this._elseexpr;
    }

    public get thenexpr(){
        return this._thenexpr;
    }

    private _parse(){
        const exprvars = parseExpressionVariables(this._expression);
        this._ifexpr = exprvars.length > 0 ?exprvars[0]:'';
        this._thenexpr = exprvars.length > 1 ?exprvars[1]:'';
        this._elseexpr = exprvars.length > 2 ?exprvars[2]:'';
    }

    transform() : string {
        let liquidexpr = this._ifexpr ? IFTEMPLATE.replace(PLACEHOLDER,this._ifexpr) :'';
        liquidexpr = this._thenexpr ? liquidexpr.concat('\n\t').concat(this._thenexpr):'';
        liquidexpr = this._elseexpr ? liquidexpr.concat('\n').concat(ELSETEMPLATE):'';
        liquidexpr = this._elseexpr ? liquidexpr.concat('\n\t').concat(this._elseexpr):'';
        liquidexpr = this._ifexpr ? liquidexpr.concat('\n').concat(ENDIFTEMPLATE):'';
        return liquidexpr;
    }


}