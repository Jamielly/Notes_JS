const foo = null ?? 'default string';
//const foo = null || 'default string';
let input = "Ola Everton, Seja BemVindo"

let mensagem = input || "Ola Usuario"

const numero = 0 || 40;

console.log(mensagem);


/*
 ?? é chamado de "nullish coalescing operator". Ele é utilizado para fornecer um valor padrão em caso de um operando ser null ou undefined, mas não em caso de outros valores "falsos" como 0, false, '' (uma string vazia) ou NaN.

Aqui está a sintaxe do operador ??:
valor1 ?? valor2

O resultado da expressão acima será valor1 se valor1 não for null ou undefined. Caso contrário, o resultado será valor2. Isso é útil quando você deseja fornecer um valor padrão apenas quando o valor original é nulo ou indefinido, sem afetar outros valores "falsos".

Por exemplo:
const valorA = null;
const valorB = "Valor de teste";

const resultado = valorA ?? valorB;

console.log(resultado); // Isso irá imprimir "Valor de teste" porque valorA é null.
Em comparação, se você usasse o operador de coalescência ||, o resultado seria "Valor de teste" em qualquer um dos seguintes casos: null, undefined, false, 0, '', ou NaN. O operador ?? é mais restrito e só considera null ou undefined como condição para usar o valor padrão.
*/