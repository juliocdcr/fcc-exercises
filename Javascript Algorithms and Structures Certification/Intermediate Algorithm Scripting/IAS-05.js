function spinalCase(str) {
    let reg = /\W|_/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(reg, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');