function solution(N) {
    let result = 0;
    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            let j = N / i, perimeter = 2 * (i + j);
            if (result === 0) result = perimeter;
            result = Math.min(result, perimeter);
        }
    }
    return result;
}
