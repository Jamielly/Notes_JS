//var (escopo global) - escopo fora do bloco.
var num1 = 10
var num2 = 20

//let (escopo local) - escopo restrito ao bloco
{
    let num2 = 30
}
num2 = 20
var num1 = 20
//boas praticas - usar let 

//const - constante que não sofre alterações com o tempo
const PI = 3.14

var a = 1
//console.log(a)

var b = 2, c = 3
//console.log(b, c)

var f = g = 5
//console.log(f,g)

var h = i, i = 6
//console.log(h,i) //indefined e 6, pois executa por linha e a virgula separa 

var i=6, h=i //h nunca foi lido então dá erro
//console.log(h,i)

const j = k = l = m = 7, n = k
console.log(j,k,l,m,n) //tudo 7

