function solution(N) {
    let binArr = [], binGaps = [], countGap = 0, dec = N;
    while (dec > 0) {
        let mod = Math.round(dec % 2);
        dec = Math.floor(dec / 2);
        binArr.unshift(mod);
    }
    binArr.forEach(x => {
        if (x === 1) {
            binGaps.push(countGap);
            countGap = 0;
            return;
        }
        countGap += 1;
    });
    return Math.max(...binGaps);
}
