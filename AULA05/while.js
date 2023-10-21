// estrutura de controle utilizado para criar loops
// while e do ... while

//while(condicao){
    // Codigo a ser executado enquanto a condição for verdadeira
//}

let i = 0
// valida antes execucao
//verificação da condição antes de executar o bloco
//while(i < 5){
//    console.log(i);
//    i++;
//}

// executa o bloco do codigo pelo menos 1 vez,
// independente da condição ser verdadeira ou falsa
/*
do {
  // codigo a ser executado
}while (condicao)
*/
let t = 0
/*
do{
    console.log(i);
    i++;
} while(i >5);
*/
/*
let numero;
do {
    numero = 50   
}while (numero <= 10)

console.log(" valor do numero " + numero)
*/

let numero;

do {
    numero = Math.floor(Math.random() * 100) 
    console.log(numero);
} while (numero % 5 !== 0)