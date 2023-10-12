// posições  0,1,2,3,4  //vetor = array        
let vetor = [1,2,30,3,4,5,45]; // Um vetor de numeros
let frutas = ["maça",
             "banana",
             "laranja", 
             "melao",
             "melancia", 
             "abacaxi",
             "manga"] // Um vetor de strings
          //numero, string, boolean, objeto
let mistos = [1,"ola", true,{nome: "Joao"}]

// spread
let nums = [1,2,4,5,...mistos]

console.log(nums);

//console.log(vetor[0]) // numero 1
//console.log(frutas[1]) // Banana
//vetor[2] = 10 // modificaçã do terceiro elemento

//console.log(vetor.length) // quantidade de itens do array
//console.log(frutas.includes("maça")) // retorna boolean e if existe
//console.log(frutas.indexOf("melao")) // if existe tras a posição // se nao existe -1
//console.log(frutas.concat(mistos)); // une dois ou mais arrays
//console.log(frutas);
//console.log(frutas.toString()); // transforma separado por virgula
//console.log(frutas.join(';')) // transforma separado pelo parametro passado
//console.log(frutas.sort()); // [modifica] ordena os itens por ordem alfabetica
//console.log(vetor.sort());
//console.log(frutas.slice(-2,5)) // a partir da posicao retorna y elementos 
                                // incluindo inicial
                                // cria uma copia
// original ou foi o modifica?
//console.log(frutas);
//console.log(frutas.splice(2,3)) // modifica o original, 
                                // posicao de start e a quantidade de elementos 
                                // a partir da posicao start
 //console.log(frutas);
 //console.log(frutas.slice(-3))
 
 // primeiro a entrar -> primeiro a sair (FIFO) fila
 // ultimo a entrar   -> primeiro a sair (LIFO) pilha

//console.log(frutas.shift())
//frutas.unshift("morango") //empilha (coloca no topo)
//console.log(frutas.unshift("morango")) // tamanho do array após remoção
//console.log(frutas)
 // desimpilhar (remove do topo)
//console.log(frutas)

frutas.push("morango") // enfileirar (coloca no fim)
frutas.pop() // desinfeilar enfileirar (retira no fim)
frutas.pop() // desinfeilar
//frutas.pop() // desinfeilar
//console.log(frutas)