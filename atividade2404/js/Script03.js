const readline = require('readline-sync');

const valor = readline.question("Informe o valor: ")
if(valor<18){
    console.log("Criança")
}else if(valor==60 && valor<120){
    console.log("Idoso")
}
else if(valor > 19 && valor <60){
    console.log("Adulto")
}
else{
    console.log("Valor inválido")
}