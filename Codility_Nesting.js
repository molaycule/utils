function solution(S) {
    let stack = [];
    for(let ch of S.split('')) {
        if (ch === '(') stack.push('(');
        if (ch === ')') {
            if (stack.length === 0) {
                stack.push(')');
                break;
            }
            stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0;
}