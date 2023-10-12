//Usando um objeto (Array Associativo)

const sinominos = {
    "feliz": ["alegre", "contente", "radiante"],
    "triste": ["melancolico", "abatido", "deprimido"],
    "rapido": ["veloz", "agil", "rapido"]
}

console.log(sinominos["feliz"][1])//retorna alegre
console.log(sinominos) // retorna o objeto completo
console.log(sinominos[triste])


//Usando estrutura de dados 'Map'
//set para setar
const sinominoMap = new Map();
sinominoMap.set("feliz", ['alegre','contente','radiante']);
sinominoMap.set("triste",['melancolico','abatido','deprimida'])
sinominoMap.set("rapido",['veloz','agil','rapido'])

//acessando - get
sinominoMap.get("feliz");
//gambiarra
sinominoMap.get("feliz").push("teste");


//deletar - delete
sinonimosMap.delete('triste');
console.log(sinominoMap);

