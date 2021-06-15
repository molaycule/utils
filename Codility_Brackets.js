function solution(S) {
    let stack = [], result = 1;
    for(let ch of S.split('')) {
        let pair = null;
        switch (ch) {
            case '{':
              stack.push('{');
              result = 0;
              break;
            case '}':
                pair = stack.pop();
                if (pair === '{') result = 1;
                else result = 0;
                break;
            case '[':
                stack.push('[');
                result = 0;
                break;
            case ']':
                pair = stack.pop();
                if (pair === '[') result = 1;
                else result = 0;
                break;
            case '(':
                stack.push('(');
                result = 0;
                break;
            case ')':
                pair = stack.pop();
                if (pair === '(') result = 1;
                else result = 0;
                break;
            default:
                break;
        }
        if (pair !== null && result === 0) break;
    }
    return stack.length === 0 ? result : 0;
}