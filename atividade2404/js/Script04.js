const readline = require('readline-sync');

const valor = Number(readline.question("Informe o valor: "))
for(let i = 1;i<valor;i++){
   if(valor%i ==0 && i%2==0){
    console.log("Todos os valores pares que são divididos: " + i)
   }
}