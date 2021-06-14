function solution(N, A) {
    let counters = new Array(N).fill(0), max = 0, lastMax = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= N) {
            if (counters[A[i] - 1] < lastMax) counters[A[i] - 1] = lastMax + 1;
            else counters[A[i] - 1] += 1;
            if (counters[A[i] - 1] > max) max = counters[A[i] - 1];
        }
        else lastMax = max;
    }
    for (let i = 0; i < counters.length; i++) {
        if (counters[i] < lastMax) counters[i] = lastMax;
    }
    return counters;
}
