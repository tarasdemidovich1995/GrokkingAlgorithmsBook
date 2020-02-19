function recursiveBinarySearch(arr, elem) {
    if (arr.length <= 1) {
        return arr[0] == elem ? elem : "There isn't such elem in this list";
    } else {
        let left = 0;
        let right = arr.length - 1;
        let middle = Math.floor(arr.length / 2);
        let guess = arr[middle];
        if (guess == elem) {
            return recursiveBinarySearch(arr.slice(middle, middle + 1));
        } else if (elem > arr[middle]) {
            return recursiveBinarySearch(arr.slice(middle + 1, right + 1), elem);
        } else {
            return recursiveBinarySearch(arr.slice(left, middle), elem);
        }
    }
}