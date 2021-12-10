function fearNotLetter(str) {
    let arr = str.split("").map((x) => x.charCodeAt());
    let val = arr.find(x => arr.indexOf(x + 1) < 0 & arr.indexOf(x) !== arr.length - 1) + 1;

    return val > 0 ? String.fromCharCode(val) : undefined;
}

fearNotLetter("abce");