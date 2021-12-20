function sumPrimes(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) {
        if (primes.every((prime) => i % prime !== 0))
            primes.push(i);
    }

    return (primes.filter(x => x <= num).reduce((x, y) => x + y, 0));
}

sumPrimes(10);