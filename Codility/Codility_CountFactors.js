function solution(N) {
    let factors = new Set();
    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            factors.add(i);
            factors.add(N / i);
        }
    }
    return factors.size;
}