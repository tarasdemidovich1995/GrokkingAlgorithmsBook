function findSmallestIndex(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort(arr) {
    let newArr = [];
    while (arr.length > 0) {
        let smallestIndex = findSmallestIndex(arr);
        newArr.push(arr[smallestIndex]);
        arr.splice(smallestIndex, 1);
    }
    return newArr;
}

console.log(selectionSort([3, 5, 2, 1, 10, 9, 11, 10, 8, 15]));