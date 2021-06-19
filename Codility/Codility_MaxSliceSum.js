function solution(A) {
    let maxEnding = maxSliceSum = 0;
    A.forEach((item, index) => {
        if (index === 0) maxEnding = maxSliceSum = item;
        else {
            maxEnding = Math.max(maxEnding + item, item);
            maxSliceSum = Math.max(maxSliceSum, maxEnding);
        }
    });
    return maxSliceSum;
}