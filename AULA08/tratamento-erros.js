/*
TRATAMENTO DE ERROS
- TRY / CATCH / FINALLY
*/

try{
    //código que pode lançar exceções
    //const result = 10 / 0; // tentando dividir por zero
    const result = 10 / 2;
    console.log(result);
    if(result == 5){
        throw new Error("Erro: O resultado é inesperado");
    }
} catch {
    //trata a exceção
    console.error("Ocorreu um erro: ",error);
}
// bloco opcional
finally {
    // codigo a ser executado independentemente de exceções
    console.log("Esse bloco sempre será executado"); //quebrando ou não ele sempre será executado
}
//o que é status-code?
//são os três digitos que indicam os erros entre o servidor e o navegador (404, 200, 500)

try {
    // Codigo que pode lançar exceções
    const result = 10 / f; // Tentando dividir por zero;
    console.log(result);
    if (result == 5){
        throw new Error({"message":"Resultado esta incorreto",
                        "data": Date(),
                        "linha de execução": 27,
                        "nome_arquivo": "tratamento de erro.js"})
    }     
}catch(error){
    // Trata a exceção
    console.error({"message":error,
    "data": Date(),
    "linha de execução": 27,
    "nome_arquivo": "tratamento de erro.js"});
} 
// bloco opcional
finally{
    console.log("Este bloco sempre será executado");
    // Código a ser executado independentemente de exceções
}
