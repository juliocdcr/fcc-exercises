function getIndexToIns(arr, num) {
    if (arr == '') {
        return 0;
    }
    arr.sort(function (a, b) { return a - b });
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i;
        }
        else if (i + 1 === arr.length) {
            return arr.length;
        }
    }
}

getIndexToIns([40, 60], 50);