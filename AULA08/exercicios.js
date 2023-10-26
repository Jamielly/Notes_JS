//1) Escreva uma função que solicite dois números do usuário e divida um número 
//pelo outro. Use um bloco try/catch para garantir que a divisão seja segura e 
//trate qualquer exceção que possa ocorrer.
const prompt = require('prompt-sync')();

const divideNumbers = (num1, num2) => {
    const result = num1 / num2;
    try {
        if (!isFinite(result)) {
            throw new Error("Erro: Você deve digitar um número válido 1");
          }
        if (num2 === 0) {
            throw new Error("Erro: Divisão por zero não é permitida.");
        }
    
      if (isNaN(result)) {
        throw new Error("Erro: Você deve digitar um número válido");
      }
    } catch (error) {
      return console.error(error.name,error.message);
    }
    return `O resultado da divisão é: ${result}`;
  };
  
  //const num1 = parseFloat(prompt("Digite o primeiro numero: "));
  //const num2 = parseFloat(prompt("Digite o segundo numero: "));

 // const divisionResult = divideNumbers(num1,num2);

  //console.log(divisionResult);
 
//2) Validação de E-mail: Crie uma função que verifique se um e-mail é válido. 
//Use um bloco try/catch para capturar exceções relacionadas à validação do e-mail.

function validaEmail(email){
    try{
        if(!email.includes("@")){
            throw new Error("Email deve ter o @")
        }
        return "Email valido"
    }catch(error){
        return error.message
    }finally{
        console.log("Validação de email finalizada")
    }
}

//const emailDigitado = "evertonteste.com.br"
//const validacao = validaEmail(emailDigitado);
//console.log(validacao);

//3) Acesso a Propriedades de Objeto: Crie um objeto com propriedades e tente 
//acessar uma propriedade que não existe. Use um bloco try/catch para capturar o 
//erro. 

const dadosPessoais = { nome: 'Maria', sobrenome: 'Santos', idade: 30, pais: 'Brasil' };

function acessarPropriedades(){
    try {
        const propriedade = prompt('Qual propriedade você deseja acessar?');
    
        if (propriedade in dadosPessoais) {
            return dadosPessoais[propriedade];
        } else {
            error;
        }    
    } catch (error) {
        console.error('Propriedade inválida')
    }
}

//console.log(acessarPropriedades());

//4) Crie uma função que tente converter uma string em um número. 
//Use um bloco try/catch para tratar erros de conversão. 

function converterParaNumero(str) {
    try {
      let numero = parseFloat(str);
      if(isNaN(numero)){
        throw new Error("Numero invalido")
      }
      return numero;
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
      return null;
    }
  }
  
  const input = prompt("Digite uma string para converter em número:");
  const resultado = converterParaNumero(input);
  console.log(resultado);


//5) Crie uma uma função que converte uma idade fornecida como string em um número,
// utilizando try e catch para verificar e tratar possíveis erros de conversão