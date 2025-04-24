const readline = require('readline-sync');

function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
  let dig1 = (soma * 10) % 11;
  if (dig1 === 10) dig1 = 0;
  if (dig1 !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
  let dig2 = (soma * 10) % 11;
  if (dig2 === 10) dig2 = 0;

  return dig2 === parseInt(cpf[10]);
}

const cpf = readline.question("Digite o CPF (somente números ou com pontos e traço): ");
if (validarCPF(cpf)) {
  console.log("CPF válido.");
} else {
  console.log("CPF inválido.");
}
