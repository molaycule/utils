function solution(A) {
    let arr = Array(A.length + 1);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] || 0;
        let item = A[i];
        if (item) arr[item - 1] = item;
    }
    return arr.indexOf(0) + 1
}
