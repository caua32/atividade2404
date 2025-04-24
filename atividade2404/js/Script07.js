const readline = require('readline-sync');

const inicio = Number(readline.question("Digite o valor inicial: "));
const fim = Number(readline.question("Digite o valor final: "));

function ehPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log("Números primos:");
for (let i = inicio; i <= fim; i++) {
  if (ehPrimo(i)) {
    console.log(i);
  }
}
