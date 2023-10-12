// funcao - conjunto de codigo que executa e retorna algo

function somar(valorA,valorB){
    return valorA + valorB
}

const subtrair = function(valorC, valorD){
    return valorC - valorD
}

const dividir = (valorE, valorF) => {
    return valorE / valorF
}

const multiplicar = (valorG, valorH) => valorG * valorH

// invocar - chamar
let numero1 = 50
let numero2 = 45
let somaTotal = somar(numero1,numero2);

//console.log(somaTotal);

let numero4 = 50
let numero5 = 65
let somaTotal1 = somar(numero4,numero5);

let numero6 = 80
let numero7 = 60

let totalSubtraido = subtrair(numero6,numero7);

let totalDivisao = dividir(numero6, numero7)

let totalMultiplar = multiplicar(numero6, numero7)
//console.log(totalDivisao);

const curry = (a) =>{
    return (b) => {
        return (c) =>{
            return a+b+c
        }
    }    
}

let total = curry(10)(50)(100)
console.log(total)