function fibs(n) {
    arr = [0, 1];
    if(n <= 2) return arr.slice(0, n);
    for (let i = 2; i < n; i++){
        arr.push(arr[arr.length - 2] + arr[arr.length - 1])
    }
    return arr;
}

console.log(fibs(5));

function fibsRec(n, arr = [0, 1]) {
    if (n <= 2) return arr.slice(0, n);
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    if (arr.length === n) return arr;
    return fibsRec(n, arr);
}

console.log(fibsRec(4))
