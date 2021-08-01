function destroyer(arr) {
    var valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(elem => !valsToRemove.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);