function sentensify(str) {
    // Only change code below this line
    let regex = /\w+/gi;
    return str.match(regex).join(" ");
    // Only change code above this line
}
sentensify("May-the-force-be-with-you");