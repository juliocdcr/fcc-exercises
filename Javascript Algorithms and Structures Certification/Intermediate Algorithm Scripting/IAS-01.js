function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;;
}

sumAll([1, 4]);