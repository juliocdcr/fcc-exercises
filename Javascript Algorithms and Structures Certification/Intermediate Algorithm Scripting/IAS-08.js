function pairElement(str) {
    let dna = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    return str.split("").map(x => [x, dna[x]]);;
}

pairElement("GCG");