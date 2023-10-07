
//Coerção Implicita:

//de num para string
var num1 = 42
var text1 = "O numero e: " + num;
//console.log(text1);

//de string para num
var text2 = "10"
var num2 = text2 *2;

//console.log(num2)
//transforma de forma implicita string p/ numero

//Transformando o tipo em booleno:
var valor = "Olá";
var isVerdadeiro = !!valor; //qualquer valor ñ vazioé considerado true

//console.log(isVerdadeiro);

//Maneira Explícita:
var text = "42"
var num = parsqInt(text) //converte string p/ num inteiro
console.log(num)

//conversao de numero para string

var numberParaConversao = 65;
var txtConvertidoString = numberParaConversao.toString();
console.log(txtConvertidoString.toString());

//Conversao de num para string (usando Template Literals)

var numLiteral = 42;
var namePessoa = 'Jamie Jamie'
var txtLiteral = `Olá ${namePessoa}, sua compra foi realizada com sucesso`  
//console.log(txtLiteral);

//conversao explicita de booleano para numeros:
//true = 1
//false = 0
var valorBooleano = true;
var numero5 = Number(valorBooleano);

console.log(numero5)



