function mutation(arr) {
    let arr1 = arr[1].toLowerCase();
    let arr2 = arr[0].toLowerCase();
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) < 0) return false;
    }
    return true;
}

mutation(["hello", "hey"]);