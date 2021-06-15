function solution(X, A) {
    let arrSet = new Set(), result = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= X) arrSet.add(A[i]);
        if (arrSet.size === X) {
            result = i;
            break;
        }
    }
    return result;
}
