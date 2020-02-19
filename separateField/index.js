function countMaxEquelSquare(width, height) {
    if (width % height != 0) {
        return countMaxEquelSquare(height, width - Math.floor(width / height) * height);
    } else {
        return `${height},${height}`;
    }
}

console.log(countMaxEquelSquare(1680, 640));