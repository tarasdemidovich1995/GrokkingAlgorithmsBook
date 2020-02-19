function countNumOfElems(arr) {
    if (arr[0] == undefined) {
        return 0;
    } else {
        arr.pop();
        return 1 + countNumOfElems(arr);
    }
}
