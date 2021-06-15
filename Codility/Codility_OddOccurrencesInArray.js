function solution(A) {
    let obj = {}, unpaired = 0;
    for (let item of A) {
        if (obj[item])
            obj[item] += 1;
        else 
            obj[item] = 1;
    }
    for (let element in obj) {
        if (obj[element] % 2 !== 0) {
            unpaired = Number(element);
            break;
        }
    }
    return unpaired;
}
