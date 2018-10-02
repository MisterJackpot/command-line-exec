function fib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

function fat(n) {
    if (n < 0) return "Erro";
    var p = 2;
    let aux = n;

    while (n >= p * p) {
        if (n % p == 0) {
            process.stdout.write(p + " * ");
            n = n / p;
        } else {
            p = p + 1;
        }
    }
    process.stdout.write(n + " = " + aux);
}

function prime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function PrimeSearch(n) {
    var count = 0
    for (var i = 2; i < 10000; i++) {
        if (prime(i)) {
            count = count + 1
        }
        if (count == n) {
            console.log(i)
            break
        }
    }
}


exports.fib = (n) => fib(n);
exports.fat = (n) => fat(n);
exports.prime = (n) => PrimeSearch(n);
exports.its_prime = (n) => prime(n);