export interface LiquidTransformer {
    expression:string;
    transform: () => string
}

export interface IfLiquidTransformer extends LiquidTransformer {
    ifexpr:string;
    elseexpr:string;
    thenexpr:string;
}


