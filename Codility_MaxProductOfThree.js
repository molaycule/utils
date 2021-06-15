function solution(A) {
    let results = [], len = A.length, sortedArr = A.sort((a, b) => a - b);
    if (sortedArr[1] < 0) results.push(sortedArr[0] * sortedArr[1] * sortedArr[len - 1])
    results.push(sortedArr[len - 3] * sortedArr[len - 2] * sortedArr[len - 1]);
    return Math.max(...results);
}