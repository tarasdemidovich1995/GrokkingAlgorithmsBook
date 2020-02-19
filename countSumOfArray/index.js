function countArrSum(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        return arr.pop() + countArrSum(arr);
    }
}