function findLongestWordLength(str) {
    let longest = "";
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        if (longest.length < strArr[i].length) {
            longest = strArr[i];
        }
    }
    return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");