#!/usr/bin/env node
'use strict';

const program = require('commander');
const numeric = require('./numeric.js')

program
    .version('0.0.1')
    .command('fib [n]')
    .description('Fibonacci nth')
    .action((n) => {
        let r = numeric.fib(n);
        console.log(r);
    });

program
    .version('0.0.1')
    .command('fat [n]')
    .description('Prime Factorization of [n]')
    .action(numeric.fat);

program
    .version('0.0.1')
    .command('prime [n]')
    .description('Prime nth')
    .action(numeric.prime);

program
    .version('0.0.1')
    .command('its_prime [n]')
    .description('Verify if [n] is prime')
    .action((n) => {
        let r = numeric.its_prime(n);
        if (r) console.log("Yes");
        else console.log("No");
    });

program
    .version('0.0.1')
    .command('calc_change [price] [payed]')
    .description('Calculate the change for a given [price] and [payment]')
    .action(numeric.calcChange);

program.parse(process.argv);