function uniteUnique(arr) {
    return [...new Set(Array.prototype.slice.call(arguments).flat())];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);