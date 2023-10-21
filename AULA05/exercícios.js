//1) Escreva um loop while que imprima números de 1 a 5.
/*
let i =1 ;
while(i <=5){
    console.log(i);
    i++;
}
*/

//2) Escreva um loop do...while que imprima os números pares de 2 a 10.
/*
let i = 2;
do {
    console.log(i)
    i +=2;
} while(i<= 10)
*/
//3) Escreva um loop while que imprima os múltiplos de 3 de 3 a 30.
/*
let i = 3
while(i <= 30){
    console.log(i);
    i +=3;
}
*/
// 4) Escreva um loop do...while que peça ao usuário para digitar a senha "12345" e 
// continue pedindo até que a senha correta seja inserida.

/*
let senhaDigitada;
let senhaCorreta = '12345'
do {
    senhaDigitada = '12345'
}while (senhaDigitada !== senhaCorreta)

console.log("Acesso permitido!");

*/
/*
const senha = "12345";
let senhas = ["1234", "12340", "12345", "9092", "e343"], tentativas = 0, senhaUser;
do {
    senhaUser = senhas[Math.floor(Math.random() * senhas.length)]
    console.log("Senha tentada: " + senhaUser);
    tentativas++;
} while (senhaUser != senha);
console.log("Acertou depois de " + tentativas + " tentativas");
*/
// 5) Escreva um loop while que imprima a sequência Fibonacci 
//com os primeiros 10 números.

// 0,1,1,2,3,5,8,13,21,34 ....
// Fn = Fn-1 + Fn-2
// Fn é o termo atual, 
// Fn-1 é o termo anterior 
// Fn-2 é o termo antes do anterior

/*
let a = 0;
let b = 1;
let contador = 1;

while(contador <= 10){
    console.log(a);
    const temp = a +b;
    a = b;
    b = temp;
   // console.log(contador);
    contador++;
}
*/
/*
let nFib = 0, next = 1, quantidade = 10;
while (quantidade-- > 0) {
    console.log(nFib);
    next += nFib
    nFib = next - nFib;
}
*/
/*
let numero1 = 0;
let numero2 = 1;
let contador = 0;

while (contador < 10) {
  console.log(numero1);
  const proximoNumero = numero1 + numero2;
  numero1 = numero2;
  numero2 = proximoNumero;
  contador++;
}

*/
/*
let n = 10;
let primeiroNumero = 0;
let segundoNumero = 1;
let contador = 0;

while (contador < n) {
  if (contador <= 1) {
    console.log(contador);
  } else {
    let proximoNumero = primeiroNumero + segundoNumero;
    console.log(proximoNumero);
    primeiroNumero = segundoNumero;
    segundoNumero = proximoNumero;
  }
  contador++;
}
*/

let primeiroNumero = 0;
let segundoNumero = 1;
let contador = 1;
let sequencia = [];

while (contador <= 10) {
  sequencia.push(primeiroNumero);
  console.log(primeiroNumero);
  let proxNumero = primeiroNumero + segundoNumero;
  primeiroNumero = segundoNumero;
  segundoNumero = proxNumero;
  contador++;
}

console.log(sequencia);