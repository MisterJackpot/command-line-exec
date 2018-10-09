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

function calcChange(price, pay) {
    var change = pay - price;
    if (change < 0) console.log("Invalid Values");
    else {

        console.log("Change: R$" + change)

        var aux = change / 100;
        if (aux >= 1) {
            console.log(parseInt(aux) + " R$100");
            change = change - (parseInt(aux) * 100)
        }
        aux = change / 50;
        if (aux >= 1) {
            console.log(parseInt(aux) + " R$50");
            change = change - (parseInt(aux) * 50)
        }
        aux = change / 20;
        if (aux >= 1) {
            console.log(parseInt(aux) + " R$20");
            change = change - (parseInt(aux) * 20)
        }
        aux = change / 10;
        if (aux >= 1) {
            console.log(parseInt(aux) + " R$10");
            change = change - (parseInt(aux) * 10)
        }
        aux = change / 5;
        if (aux >= 1) {
            console.log(parseInt(aux) + " R$5");
            change = change - (parseInt(aux) * 5)
        }
        aux = change / 2;
        if (aux >= 1) {
            console.log(parseInt(aux) + " R$2");
            change = change - (parseInt(aux) * 2)
        }
        if (aux >= 1) {
            console.log(parseInt(aux) + " R$1");
        }
    }
}

function binaryToDec(bin){
    var digits = (""+bin).split("");
    digits.reverse();
    var result = 0;
    var aux = 0;
    digits.forEach(element => {
        if(element>1 ||element < 0) return "Not Binary"
        if(element == 1){
            result = result + Math.pow(2,aux);
        }
        aux ++;
    });
    console.log(result);
}

function decToBinary(dec){
    var result = dec;
    var reminder = 0;
    var bin = [];
    while(result>1){
        reminder = result%2;
        result = result/2;
        bin.push(parseInt(reminder));
    }
    bin.reverse();
    console.log(bin);
}


exports.fib = (n) => fib(n);
exports.fat = (n) => fat(n);
exports.prime = (n) => PrimeSearch(n);
exports.its_prime = (n) => prime(n);
exports.calcChange = (n,m) => calcChange(n,m);
exports.binaryToDec = (n) => binaryToDec(n);
exports.decToBinary = (n) => decToBinary(n);