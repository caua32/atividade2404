const readline = require('readline-sync');

const horas = Number(readline.question("Digite o número de horas: "));
const minutos = horas * 60;
const segundos = horas * 3600;

console.log(`${horas} hora(s) equivalem a ${minutos} minuto(s) e ${segundos} segundo(s).`);
