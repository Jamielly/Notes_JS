// for, for... in, for... of

/*
for (inicialização;condição; incremento){
    // Codigo a ser repetido
}
*/
// Utilizar quando precisar do indice
// laços numericos tradicionais, como indices de arrays.
// Permite controle preciso sobre o inicio, condição e incremento da iteração
// Adequado para loops com um numero fixo de iterações.
for(let i =0; i <5; i++){
    //   console.log(i);
   }
   
   // for ... in - iterar as propriedades enumeraveis de um objeto
   // É util para acessar as chaves e valores dos objetos
   
               //chave: valor
   const obj = { a:1, b:2, c:3};
   
   for (const key in obj){
      // console.log('chave: ' + key, 'valor: '+ obj[key])
   }
   
   // for ... of - iterar sobre os valores de arrays
   
   const array = ["leao","gato","cachorro","elefante","vaca"]
   
   for (const item of array){
      // console.log(item);
   }
   
   // 
   const meuArray = new Set([1,1,2,2,3,3,4,5])
   
   //const meuArray = [1,1,2,2,3,3,4,5];
   
   for (const value of meuArray){
       console.log(value)
   }