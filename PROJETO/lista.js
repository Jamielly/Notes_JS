// Defina um array para armazenar as tarefas
const listaDeTarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa(titulo, descricao) {
  const id = listaDeTarefas.length + 1;
  const tarefa = {
    id,
    titulo,
    descricao,
    concluida: false
  };
  listaDeTarefas.push(tarefa);

  // Mostrar um alerta de sucesso (não parece estar funcionando)
  alert("Tarefa adicionada com sucesso!");

  return tarefa;
}

// Função para editar uma tarefa por ID
function editarTarefa(id, novoTitulo, novaDescricao) {
  const tarefa = listaDeTarefas.find(item => item.id === id);
  if (tarefa) {
    tarefa.titulo = novoTitulo;
    tarefa.descricao = novaDescricao;
    return tarefa;
  }
  return null; // Retorna null se a tarefa não for encontrada
}

// Função para remover uma tarefa por ID
function removerTarefa(id) {
  const indice = listaDeTarefas.findIndex(item => item.id === id);
  if (indice !== -1) {
    listaDeTarefas.splice(indice, 1);
    return true;
  }
  return false; // Retorna false se a tarefa não for encontrada
}

// Função para listar todas as tarefas
function listarTodasTarefas() {
  return listaDeTarefas;
}

// Função para obter uma tarefa por ID
function obterTarefaPorId(id) {
  return listaDeTarefas.find(item => item.id === id) || null;
}

// Como deve ficar +/-:
adicionarTarefa("Fazer compras", "Comprar leite e pão");
adicionarTarefa("Estudar JavaScript", "Assistir aulas e praticar");
editarTarefa(1, "Fazer compras semanalmente", "Comprar leite, pão e frutas");
removerTarefa(2);

console.log(listarTodasTarefas());
console.log(obterTarefaPorId(1));

// Expectativa: Adicionar uma tarefa quando o botão "Adicionar" é clicado
function adicionarTarefa() {
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    
    if (titulo.trim() === "") {
        alert("O título da tarefa é obrigatório.");
        return;
    }

    const tarefa = adicionarTarefa(titulo, descricao);

    // Atualiza a interface do usuário - puxando do HTML
    const lista = document.getElementById("lista-de-tarefas");
    const listinha = document.createElement("listinha");
    listinha.innerHTML = `${tarefa.titulo} - ${tarefa.descricao} <button onclick="removerTarefa(${tarefa.id})">Remover</button>`; //puxando do HTML
    lista.appendChild(listinha); // adiciona como 'filho', o tal da estrutura DOM.
    //DOM é uma estrutura de árvore como elemento de nós 'filhos' de outros nós que são os 'pais'
    // Especificamente, ele é usado para adicionar um nó como o último filho de um elemento pai.

    // Limpa os campos de entrada p/ poder escrever novamente
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
}
