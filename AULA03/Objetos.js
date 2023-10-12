//o dicionário(objeto em estrutura de dados) é formado por..
//chaves : valores 

let pessoa = {
    nome: "Jamie Jamie",
    idade: 20,
    cidade: "São Paulo",
    torcida: "São Paulo",
    genero: "Não binário",
    endereco: "Rua 123",
    altura: 1.87
}

console.log(pessoa.nome.endereco);
console.log(pessoa['idade']) //acesso por array
pessoa.profissao = "Tech Lead BackEnd";

console.log(pessoa);

//formas de verificação se chaves existem:
console.log('cidade' in pessoa); // em boolean
console.log(pessoa.hasOwnProperty('genero')) //retornar um boolean

//para apagar um item
delete pessoa.torcida;
console.log(pessoa);

//percorrer o dicionário ou objeto
// for ...in 
for (let key in pessoa){
    console.log(key + ": " + pessoa[key]) 
    for(let key1 in pessoa.endereco){
        console.log(key + ": " + pessoa.endereco[key1])
    }
}


//Pego as chaves do objeto
let chaves = Object.keys(pessoa);
//console.log(chaves);

//Pegar apenas os valores (conteúdo)
let valores = Object.values(pessoa);

//modificando dados
//sem as chaves ele não copia!!! 
let pessoa_2 = {...pessoa}//faz uma cópia sem modificar o original
pessoa_2.nome = "Jami"
pessoa_2.idade = 25

console.log(pessoa);
console.log(pessoa_2);

//Objetos em JS são identificados ao JSON
/*{
    "nome-da-pessoa": "Jamie",
    "idade" : 25
}
*/





