function rangeOfNumbers(startNum, endNum) {
    if (startNum - endNum === 0) {
        return [startNum];
    } else {
        const rangeArray = rangeOfNumbers(startNum, endNum - 1);
        rangeArray.push(endNum);
        return rangeArray;
    }
};