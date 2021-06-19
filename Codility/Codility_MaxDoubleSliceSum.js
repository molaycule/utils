function solution(A) {
    let arr1 = [], arr2 = [], result = 0;
    for (let i = 1; i < A.length - 1; i++) {
        arr1[i] = Math.max(0, A[i] + (arr1[i - 1] || 0));
    }
    for (let i = A.length - 2; i > 0; i--) {
        arr2[i] = Math.max(0, A[i] + (arr2[i + 1] || 0));
    }
    for (let i = 1; i < A.length - 1; i++) {
        result = Math.max(result, (arr1[i - 1] || 0) + (arr2[i + 1] || 0));
    }
    return result;
}