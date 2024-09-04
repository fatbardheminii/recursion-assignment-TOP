function mergeSort(arr) {
    if (arr.length === 0) return 'Provide a non empty array';
    if (arr.length === 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid, arr.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    const sortedArr = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        sortedArr.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        sortedArr.push(right[rightIndex]);
        rightIndex++;
    }

    return sortedArr;
}

console.log(mergeSort([1, -8, 57, 20.36, 20.35, 66, 88, 15]));
console.log(mergeSort([]));