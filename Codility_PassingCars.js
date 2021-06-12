function solution(A) {
    let result = 0, westCarsToSkip = 0, westCars = A.filter(x => x === 1);
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            result += westCars.length - westCarsToSkip;
            if (result > 1000000000) {
                result = -1;
                break;
            }
            continue;
        }
        westCarsToSkip++;
    }
    return result;
}
