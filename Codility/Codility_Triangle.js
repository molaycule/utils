function solution(A) {
    let result = 0, sortedArr = A.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length - 2; i++) {
        if (sortedArr[i] + sortedArr[i + 1] > sortedArr[i + 2]) {
            if (sortedArr[i + 1] + sortedArr[i + 2] > sortedArr[i]) {
                if (sortedArr[i + 2] + sortedArr[i] > sortedArr[i + 1]) {
                    result = 1;
                    break;
                }
            }
        }
    }
    return result;
}