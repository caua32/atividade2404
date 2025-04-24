const readline = require('readline-sync');

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativa;

do {
  tentativa = Number(readline.question("Tente adivinhar o número entre 1 e 10: "));
  if (tentativa < numeroSecreto) {
    console.log("Maior!");
  } else if (tentativa > numeroSecreto) {
    console.log("Menor!");
  }
} while (tentativa !== numeroSecreto);

console.log("Parabéns! Você acertou.");
