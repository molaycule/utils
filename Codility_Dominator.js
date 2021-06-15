function solution(A) {
    let halfSize = A.length / 2, counterObj = {}, max = 0, result = -1;
    for (let i = 0; i < A.length; i++) {
        counterObj[A[i]] = counterObj[A[i]] + 1 || 1;
        if (counterObj[A[i]] > max) {
            max = counterObj[A[i]];
            result = i;
        }
        if (max > halfSize) break;
        else result = -1;
    }
    return result;
}