function solution(A) {
    let distinct = {};
    for (let item of A) {
        if (distinct[item]) continue;
        distinct[item] = 1;
    }
    return Object.keys(distinct).length;
}