function translatePigLatin(str) {

    if (str[0].match(/[aeiou]/)) return str + "way";

    let cons = str.match(/^[^aeiou]+/)[0];

    return str.substring(cons.length) + cons + "ay";
}

translatePigLatin("consonant");