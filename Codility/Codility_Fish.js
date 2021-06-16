function solution(A, B) {
    let i = 0, result = 0, maxStackedFish = 0, maxStackedFishIndex = 0, stackedFishes = [];
    while (i < A.length) {
        if (B[i] === 1) {
            stackedFishes.push(A[i]);
            let maxValue = Math.max(maxStackedFish, A[i]);
            if (maxStackedFish !== maxValue) {
                maxStackedFish = maxValue;
                maxStackedFishIndex = stackedFishes.length - 1;
            }
        }
        if (stackedFishes.length === 0 && B[i] === 0) result++;
        if (stackedFishes.length > 0 && B[i] === 0) {
            if (maxStackedFish < A[i]) {
                result++;
                maxStackedFish = maxStackedFishIndex = 0;
                stackedFishes = [];
            } else {
                let j = stackedFishes.length - 1
                while (j > maxStackedFishIndex) {
                    let value = stackedFishes.pop();
                    if (value > A[i]) {
                        stackedFishes.push(value);
                        break;
                    }
                    j--;
                }
            }
        }
        i++;
    }
    return stackedFishes.length > 0 ? result + stackedFishes.length : result;
}