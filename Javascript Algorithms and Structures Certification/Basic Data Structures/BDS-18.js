function countOnline(usersObj) {
    // Only change code below this line
    let total = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            total++;
        }
    }
    return total;
    // Only change code above this line
}