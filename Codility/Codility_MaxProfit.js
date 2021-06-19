function solution(A) {
    let minValue = maxValue = maxProfit = 0;
    A.forEach((item, index) => {
        if (index === 0) minValue = maxValue = item;
        else if (item < minValue) {
            minValue = item;
            maxValue = 0;
        }
        else if (item > maxValue) maxValue = item;
        maxProfit = Math.max(maxProfit, maxValue - minValue);
    });
    return maxProfit;
}