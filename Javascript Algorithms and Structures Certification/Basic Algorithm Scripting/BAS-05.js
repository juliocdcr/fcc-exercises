function largestOfFour(arr) {
    let largestNum = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        largestNum = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > 0 && largestNum < arr[i][j]) {
                largestNum = arr[i][j];
            } else if (arr[i][j] < 0 && largestNum < arr[i][j]) {
                largestNum = arr[i][j];
            }
        }
        newArr.push(largestNum);
    }
    console.log(newArr);
    return newArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);