function sumFibs(num) {
    let fibo = [1, 1];

    while ((fibo[0] + fibo[1]) <= num) {
        fibo.unshift(fibo[0] + fibo[1]);
    }

    return fibo.filter(x => x % 2 != 0).reduce((x, y) => x + y, 0);
}

sumFibs(4);