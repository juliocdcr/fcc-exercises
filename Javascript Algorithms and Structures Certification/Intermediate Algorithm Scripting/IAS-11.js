function convertHTML(str) {
    let html = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    return str.split("").map(x => html[x] || x).join("");
}

convertHTML("Dolce & Gabbana");