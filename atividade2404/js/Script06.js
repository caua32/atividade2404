const readline = require('readline-sync');

const numero = Number(readline.question("Digite um número para calcular o fatorial: "));
let fatorial = 1;

for (let i = 2; i <= numero; i++) {
  fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);
