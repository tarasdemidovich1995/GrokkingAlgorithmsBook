function maxElemInArr(arr) {
    if (arr.length <= 1) {
        return arr[0];
    } else {
        let lowerNumInd = arr[1] > arr[0] ? 0 : 1;
        arr.splice(lowerNumInd, 1);
        return maxElemInArr(arr);
    }
}

console.log(maxElemInArr([1, 2, 3, 4, 5, 6, 10, 4, 12, 15, 1, 1, 1, 1]));