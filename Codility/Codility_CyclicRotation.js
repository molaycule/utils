function solution(A, K) {
    if (A.length === 0) return A;
    for (let i = 0; i < K; i++) {
        let item = A.pop();
        A.unshift(item);
    }
    return A;
}
