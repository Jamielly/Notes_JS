// Truthy - são tratados como verdadeiros quando avaliados em um contexto
//          booleano
// Falsy  - são tratados como falsos.

// Valores não vazios em geral são verdadeiros

if ("Olá Mundo"){
    //  console.log("é Truthy");
  }
  
  // Valores numericos 
  // Valores maiores ou menores que zero
  if(42){
     // console.log("é Truthy");
  }
  
  // Validação Array e objetos
  const meuArray = [];
  if(meuArray){
      //console.log("é Truthy");
  }
  
  // true = 1
  // false = 0
  // falsy com zero 
  
  // `""`, zero `0`, `null`, `undefined`, `NaN`, false 
  if(0){
      //console.log("é Truthy");
  }
  
  let variavelNaoDefinida;
  if(variavelNaoDefinida){
      //console.log('É truthy')
  }
  
  const resultado = 10;// "texto";
  if(isNaN(resultado)){
  //    console.log("É NaN e falsy")
  }
  
  if(false){
      console.log("É Truthy")
  }
  
  const valorNulo = null;
  
  if(valorNulo){
     // console.log("É Truthy")
  }
  
  if(1 == {}){
      console.log("é Truthy");
  }