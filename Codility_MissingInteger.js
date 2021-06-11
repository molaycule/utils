function solution(A) {
    let result = 1, sortedArr = [...new Set(A)].sort((a, b) => a - b).filter(x => x > 0);
    for (let i = 1; i <= sortedArr.length; i++) {
        if (sortedArr[i - 1] !== i) {
            result = i;
            break;
        }
        if (i === sortedArr.length) result = i + 1;
    } 
    return result;
}
