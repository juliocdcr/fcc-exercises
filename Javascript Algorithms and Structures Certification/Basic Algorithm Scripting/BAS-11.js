function titleCase(str) {
    let word = str.split(" ");
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].toLowerCase()
        word[i] = word[i][0].toUpperCase() + word[i].substr(1);
    }
    str = word.join(" ");
    return str;
}

titleCase("I'm a little tea pot");