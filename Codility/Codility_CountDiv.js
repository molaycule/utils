function solution(A, B, K) {
    let start = A, end = B, startDiv = Math.floor(start / K);
    if (startDiv * K < start) start = (startDiv * K) + K;
    let diff = end - start, result = Math.floor(diff / K);
    if (start === 0 && diff === 0) return 1;
    if (start % K === 0 || end % K === 0) return result + 1;
    return result;
}
