// 1)Escreva um programa em JavaScript que imprima todos os números pares de 1 a 20.

for (let i = 2; i <=20; i +=2){
    // console.log(i);
 }
 
 // 2)Crie uma função que calcule a média de um array de números.
 
 function calculeMedia (numeros){
     if(numeros.length === 0){
         return "O array esta vazio"
     }
     let soma = 0 ;
     for(let i = 0; i < numeros.length; i++){
         soma += numeros[i];
     }
      const media = soma /numeros.length;
      return media;
 }
 
 function calculeMediaRed (numeros){
     if(numeros.length === 0){
         return "O array esta vazio"
     }
     let soma = 0 ;
     const valorTotal = numeros.reduce((accumulator, currentValue) => accumulator + currentValue, soma);
     const media = valorTotal /numeros.length;
     return media;
 }
 
 
 const arrayNumeros = [20,50,60,45]
 const resultado = calculeMediaRed(arrayNumeros);
 
 //console.log(resultado);
 
 // 3)Escreva um programa que, dada uma string, conte o número de vogais nela.
 
 
 function contaVogais(string){
     string = string.toLowerCase();
     const vogais= "aeiouéàúó";
     let totalVogais = 0;
     for(let i = 0; i < string.length; i ++){
         if(vogais.includes(string[i])){
             totalVogais++;
         }
     }
     return totalVogais;
 }
 
 const texto = " Javascript É Belo"
 const result = contaVogais(texto);
 //console.log(result);
 
 // 4) Escreva um programa que use um laço for para imprimir os números de 1 a 100 
 //no console, mas substitua os números divisíveis por 3 por "Fizz" 
 // e os números divisíveis por 5 por "Buzz". 
 // Para números divisíveis por ambos 3 e 5, exiba "FizzBuzz".
 
 for (let i = 1; i <= 100; i++) {
     let output = '';
   
     if (i % 3 === 0) {
       output += 'Fizz';
     }
   
     if (i % 5 === 0) {
       output += 'Buzz';
     }
   
   //  console.log(output || i);
   }
 
 // 5) Crie um array de objetos, onde cada objeto representa um aluno com 
 // propriedades como nome e notas (um array de notas). 
 // Use um laço for...of para iterar sobre o array de alunos e, para cada aluno,
 // use um laço for para calcular a média de suas notas. 
 // Exiba o nome do aluno e sua média no console.
 
 let alunos = [
   { nome: "Vilar", notas: [70, 80, 60, 90] },
   { nome: "Protti", notas: [60, 80, 20, 100] },
   { nome: "Farias", notas: [80, 80, 40, 60] },
   { nome: "Marcos", notas: [50, 80, 30, 40] },
   { nome: "Vasconcelos", notas: [20, 80, 90, 90] }
 ]
 
 
 for (const aluno of alunos){
     const notas = aluno.notas;
     let soma = 0;
 
    for(const nota of aluno.notas){
      soma += nota;
    }
    const media = soma / notas.length
    console.log(`${aluno.nome} - Media: ${media}`)
 }