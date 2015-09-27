function primeNum(x) {
    for (i = 2; i < x; i ++) {
        if (x % i === 0) {
            return false;
        }
    } return true;
}

function maxPrime(y) {
    for (j = 1000; j > 2; j -- ) {
        if (y % j === 0 && primeNum(j)) {
            console.log (j)
            break
        }
    }
}

maxPrime(600851475143)