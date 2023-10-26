// Funções e Assinaturas
// reutilização de bloco

function soma(a,b){
    return a+b;
}


const substracao = function (a,b){
    return a-b
}


//soma(1,2)
//console.log(soma(1,2,3))

//Assinatura de Função
//nomeDaFuncao (parametroTipo,parametro2Tipo, parametroN-tipo) -> RetornoTipo

//soma(number, number) -> number

// Parametros nomeados 
// Usando objetos para passar argumentos com nomes especificos

function saudacao ({nome, saudacao,idade}){
    return `${saudacao}, ${nome} ${idade}`
}

function saudacao2 (pessoa){
    return `${pessoa.saudacao}, ${pessoa.nome}`
}
const pessoa = {nome:"Jamie", saudacao: "Ola"}

const mensagem = saudacao2(pessoa)

const mensagem1 = saudacao({nome:"Jamie", saudacao: "Ola",idade:41})

//console.log(mensagem1);

// Composição e Encadeamento de Funções
// Composição de funções - envolve a criação de novas funções combinando
// várias funções existentes
// Encadeamento - é a pratica de chamar varias funções em sequencia

const numeros = [1,2,3,4,5];

const resultado = numeros
.filter(numero => numero % 2 ===0)  // Filtrar numeros pares
.map(numero => numero *2) // Dobra os numeros pares
.reduce((soma, numero) => soma+numero,0); // Soma todos os elementos

console.log(resultado);