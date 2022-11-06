

export const  parseTransformerKey = (expr:string) => {
    const key = expr?expr.trim().toLowerCase():"";
    return key.replace(/\{[^}]+\}/g, '').replace(/ /g, '');
}

export const parseExpressionVariables = (expr:string) => {
    const varexprn = expr?expr.trim():"";
    const variables = varexprn.match(/[^{}]+(?=})/g);
    return variables ? variables :[]
}