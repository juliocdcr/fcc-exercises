function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    var valsToReturn = Object.keys(source);
    arr = collection.filter(elem => valsToReturn.every(key => elem.hasOwnProperty(key) && elem[key] === source[key]));
    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });