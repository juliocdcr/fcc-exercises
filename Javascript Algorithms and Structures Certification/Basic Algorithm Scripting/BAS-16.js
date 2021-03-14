function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let subArr = [];
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (count == size || i + 1 == arr.length) {
            subArr.push(arr[i]);
            newArr.push(subArr);
            subArr = [];
            count = 1;
        } else {
            subArr.push(arr[i]);
            count++;
        }
    }
    console.log(newArr);
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);