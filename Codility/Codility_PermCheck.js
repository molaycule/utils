function solution(A) {
    let result = 1, sortedArr = A.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== i + 1) {
            result = 0;
            break;
        }
    }
    return result;
}
