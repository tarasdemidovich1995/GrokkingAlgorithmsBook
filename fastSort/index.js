function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let baseElemIndex = Math.floor(Math.random() * arr.length);
    let baseElem = arr[baseElemIndex];
    let largeValues = [];
    let lessValues = [];
    for (let i = 1; i < arr.length; i++) {
        if (i == baseElemIndex) continue;
        baseElem > arr[i] ? lessValues.push(arr[i]) : largeValues.push(arr[i]);
    }
    return [...quickSort(lessValues), baseElem, ...quickSort(largeValues)];
}

console.log(quickSort([1, 1, 1, 1, 1, 1, 5, 3, 3, 3, 3, 4, 4, 4, 6, 6, 6, 8, 9, 10, 11, 12]));