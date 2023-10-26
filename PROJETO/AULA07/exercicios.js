//1) Defina uma função calculadora que aceita três argumentos:
// dois números e uma operação (por exemplo, '+', '-', '*', '/'). 
// A função deve realizar a operação especificada nos números.
/*
function calculaValores(valor1, valor2, operacao){
    switch(operacao){
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            if(valor2 !==0){
                return valor1/valor2
            }else{
                return "Erro: Divisão com numero zero"
            }
        default:
            return "Operação Invalida"
        }
}

let valor1 = 0
let valor2 = -10
//let resultado = calculaValores(valor1,valor2,'+')
let resultado = calculaValores(valor1,valor2,'-')
//let resultado = calculaValores(valor1,valor2,'*')
//let resultado = calculaValores(valor1,valor2,'/')

console.log(resultado);
*/

//const prompt = require('prompt-sync')();
function calculadora(num1, num2, op){
    let resultado = "";
    switch (op){
        case '+': resultado = num1 + num2; break
        case '-': resultado = num1 - num2; break
        case '*': resultado = num1 * num2; break
        case '/': resultado = num1 / num2; break
        default: console.log("Operador incorreto");
        }
        return resultado;
    }
//const num1 = Number(prompt('Digite o primeiro número: '));
//const num2 = Number(prompt("Digite o segundo número: "));
//const op = prompt("Digite um operador: ");

//const resultado = calculadora(num1, num2, op);
//console.log(resultado)

//2)Crie uma função inverteString que aceita uma string como 
//entrada e retorna a string invertida.
/*
function inverteString(str){
    // Divide a string em um array de caracteres
    const caracteres = str.split('')

    // Inverte o array de caracteres
    const caracteresInverte = caracteres.reverse();

    // Juntar os caracteres
    const caracteresJuntados = caracteresInverte.join('')
    
    console.log(caracteresJuntados)                          

}

const frase = 'Everton da silva'
const result  = inverteString(frase)
console.log(result);
*/
/*
const prompt = require('prompt-sync')();

function inverteString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

const stringOriginal = prompt('Digite algo: ');
const stringInvertida = inverteString(stringOriginal);
console.log(stringInvertida);
*/
//3) Implemente uma função factorial que calcula o fatorial 
//de um número inteiro positivo. 
/*
function implementaFatorial(n){
    if(n < 0){
        return "O numero precisa ser positivo"
    }else if(n ===0 || n === 1){
        return 1;
    }else{
        let resultado = 1;
        for (let i=2; i<= n;i++){
            resultado *= i;
        }
        return resultado;
    }
}
*/
//const numero =0;
//const resultadoFator = implementaFatorial(numero);
//console.log(`o fatorial do ${numero} é ${resultadoFator}`)

//4) Implemente uma função encadeamentoFuncoes que aceita um número como entrada 
//e encadeia as seguintes operações: dobrar, subtrair 5 e então elevar ao quadrado.
// A função deve retornar o resultado final.

/*
function encadeamentoFuncoes(valor){
    // Função para dobrar o numero
    const dobrar = (x) => x *2;

    // Função para subtrair
    const subtrair5 = (x) => x -5;

    // Funçao para elevar ao quadrado
    const elevarAoQuadrado = (x) => x ** 2;

    const resultado = elevarAoQuadrado(subtrair5(dobrar(valor)))
    return resultado;
}

const valor = 5
const resultado = encadeamentoFuncoes(valor);
console.log(resultado);
*/
/*
function encadeamentoFuncoes(numero){
    console.log(numero);
    const encadeamento = numero
    .map(numero => numero*2)
    .map(numero => numero -5)
    .map(numero => numero *numero);
    return encadeamento;
}
const numero = 7;
const resultado = encadeamentoFuncoes(numero);
*/
//console.log(resultado);

// 5) Escreva uma função chamada compor que aceita uma matriz de funções e retorna 
// uma nova função que executa cada função na matriz em sequência, passando o 
// resultado de uma como entrada para a próxima.

function compor(matrizFuncao){
       return function(valorInicial){
            return matrizFuncao.reduce(function(resultado,funcao){
                return funcao(resultado);
            },valorInicial);
       }
}

// Função para dobrar o numero
const dobrar = (x) => x *2;

// Função para subtrair
const subtrair5 = (x) => x -5;

// Funçao para elevar ao quadrado
const elevarAoQuadrado = (x) => x ** 2;

const matrizFuncao = [dobrar, subtrair5, elevarAoQuadrado];

const funcaoCompor = compor(matrizFuncao);

const result = funcaoCompor(9);

console.log(result);