function solution(A) {
    let arr = [...A], arrReverse = [...A].reverse(), sumArr = [], sumArrReverse = [], result = 0;
    for (let i = 0; i < A.length - 1; i++) {
        sumArr.push(i === 0 ? arr[i] : sumArr[i - 1] + arr[i]);
        sumArrReverse.push(i === 0 ? arrReverse[i] : sumArrReverse[i - 1] + arrReverse[i]);
    }
    for (let j = 0; j < A.length - 1; j++) {
        let value = Math.abs(sumArr[j] - sumArrReverse[(A.length - 2) - j]);
        result = j === 0 ? value : Math.min(result, value);
    }
    return result;
}
