function countDown(number) {
    if (number > 0) {
        countDown(number - 1);
    } else {
        return;
    }
    console.log(number);
}

countDown(6);