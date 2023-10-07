//https://github.com/evercan/aula-1091
//1) Crie uma variável chamada "numero1" e atribua a ela um valor numérico. Em seguida, crie uma variável chamada "numero2" e atribua a ela outro valor numérico. Realize a soma desses dois números e exiba o resultado no console.
let num1 = 10
let num2 = 20
//let somaNum = num1 + num2
//console.log(somaNum);

//2) Declare uma variável chamada "texto1" e atribua a ela uma string com um texto qualquer. Em seguida, crie uma variável chamada "texto2" e atribua a ela outro texto. Concatene esses dois textos e exiba o resultado no console.
let txt1 = "Jamie Jamie"
let txt2 = "Pato Tontxo"
let txt3 = txt1 + ('\n') + txt2;
//console.log(txt3); //--> Jamie Jamie  Pato Tontxo

//3) Crie uma variável chamada "idade" e atribua a ela um número que represente a sua idade. Em seguida, crie uma condicional que verifique se a sua idade é maior ou igual a 18 anos. Se for, exiba uma mensagem indicando que você é maior de idade. Caso contrário, exiba uma mensagem indicando que você é menor de idade.
var idade = 12
if (idade >= 18){
    console.log("Maior de Idade");
}else {
    console.log('Menor de Idade');
}