 //1) Escreva uma função que receba um vetor de números e retorne a soma de todos 
 // os elementos.

 function somarTotal(vetor){
    let soma = 0
    for(let i=0; i < vetor.length; i++){
        soma = soma + vetor[i]
    }
    return soma;
 }

 const meuVetor = [1,4,5,8]
 const resultado = somarTotal(meuVetor);
 //console.log(resultado);

 //2) Escreva uma função que encontre o valor máximo em um vetor de números.
function max(vetor){
    let max = -Infinity; 
for (let i=0; i<vetor.length;i++){
    if(vetor[i] > max){
      max = vetor[i];
    }
}
return max;
}
let vetor = [1, 2, 3, 4, 5];
console.log(max(vetor));

//OU:
//function encontreValorMax(vetor){
//  if (vetor.length === 0){
//    console.log("O vetor esta vazio");
//
//  }else{
//    let max = vetor[0];
//    for (let i = 1; i<vetor.length;i++){
//     if(vetor[i] > max){
//  max = vetor[0];
//}
//    }
//  }
//   return max;
//}
//const meuVetor = [1,3,8,6,20];
//const max = encontreValorMax(meuVetor);
// console.log(max);

// const maxTotal = Math.max(...meuVetor); "retorna o total - sprit(reticências)""
// console.log(maxTotal);



 // 3) Uma empresa está implementando um chatbot para um síndico de um condomínio. Esse síndico tem a necessidade de saber num primeiro momento se o feedback dos condôminos é um dos predefinidos por ele.
//A lista dos possíveis feedbacks é essa:
//const feedbacks = ["Ruim", "Pessimo", "Regular", "Bom", "Otimo"];
//O chatbot deve então receber o feedback digitado pelo usuário e retornar se esse valor é válido ou não.
// Caso o usuário digite “Péssimo” ou “Ótimo” deve valer por “Pessimo” e “Otimo” respectivamente.
//Para resolver esse problema, crie uma função chamada verificarFeedbackValidoque deve:
//- Receber uma string.
//- Retornar um valor booleano caso esse feedback (string) seja um valor válido.
// - Utilize a função includes() no seu desenvolvimento.
const feedbacks = ["Ruim", "Pessimo", "Regular", "Bom", "Otimo"];

function verificarFeedbackValido(feedback) {
  //converte o feedback para minusculas, para que seja insensivel a maiusculas e minusculas
  const feedbackMin = feedback.toLowerCase();

  //Verficar se o feedback será incluido na lista de válidos
  const feedbackValido = feedbacks.includes(feedbackMin);

  return feedbackValido;
}
console.log(verificarFeedbackValido("Pessimo"));
console.log(verificarFeedbackValido("Regular"));
console.log(verificarFeedbackValido("Ótimo"));
console.log(verificarFeedbackValido("Ruim"));
console.log(verificarFeedbackValido("Bom"));
/*OU
function verificarFeedbackValido(nome){
  const feedbacks = ["Ruim", "Pessimo", "Regular", "Bom", "Otimo"];
  //validação de entrada de dados - p/ maiusculas e tornar a comparação case-insesitive (ignorar os acentos)
  const feedbackCase = nome.toLowerCase();

  const resul = feedbackCase.includes(feedbackCase)
  return resul;
}
const feedbackRecebido = "Péssimo";
const feedbackResultado = verificarFeedbackValido(feedbackRecebido);

if (feedbackRecebido){
  console.log(`O feedback ${feedbackRecebido} é válido!`);
  }else{
    console.log('Não é válido!');
  }

*/





// 4)Um hospital acaba de atualizar seu sistema de chamada por senhas. Bem como já funcionava, esse sistema tem uma fila preferencial e cada paciente preenche seu nome ao dar entrada no hospital.
/*Por estar ainda em desenvolvimento, a lista é composta apenas pelo nome completo das pessoas.
O secretário fará a chamada do próximo paciente, porém para gerar o relatório de tempo de espera ele precisa saber qual a posição do paciente na fila.
A lista que o secretário possui é essa aqui:
const pacientes = [
  "Bento Raimundo Cavalcanti",
  "Oliver Samuel Cardoso",
  "Geraldo Ryan Danilo Carvalho",
  "Isis Tatiane Sophie Santos",
  "Clarice Esther Moraes",
];
A próxima da fila é "Isis Tatiane Sophie Santos", agora o secretário precisa saber qual a posição dela na fila, lembrando que a posição 0 não faz sentido para ele, devemos começar da posição 1.
Para resolver esse problema, crie uma função chamada verificarPosicaoPacienteFila que deve:
Receber uma string (nome do paciente).
Retornar um número com a posição do paciente da fila +1 (somado com o número 1), pois a posição na fila deve começar em 1.
Utilize a função indexOf() no seu desenvolvimento.
*/

function verificarPosicaoPacienteFila(nomePaciente){
  const pacientes = [
    "Bento Raimundo Cavalcanti",
  "Oliver Samuel Cardoso",
  "Geraldo Ryan Danilo Carvalho",
  "Isis Tatiane Sophie Santos",
  "Clarice Esther Moraes",
];
  const posicao = pacientes.indexOf(nomePaciente);
  if(posicao !== -1){
    return posicao +1;
  }else{
    return 0;
  }
}
const nomePaciente = "Isis Tatiane Sophie Santos";
const posicoaDaFila = verificarPosicaoPacienteFila(nomePaciente);

if(posicoaDaFila !== 0){
  console.log(`O paciente ${nomePaciente}, está na posição ${posicoaDaFila}`);
}else{
  console.log(`O paciente ${nomePaciente}, não se encontra na fila`);
}


/*5) Remover Feedbacks Duplicados
Um consultor de marketing sugeriu que uma empresa coletasse feedbacks de seus usuários.
Após o fim da coleta eles perceberam que vários usuários reportaram as mesmas sugestões.
Segue o modelo coletado:
const feedbacks = [
  "Melhorar responsividade do site",
  "Erros confusos",
  "Os botões são intuitivos",
  "Erros confusos",
];
Para resolver esse problema, crie uma função chamada removerFeedbacksDuplicados que deve:
Receber um array de string.
Retornar esse array sem valores duplicados.
*/


