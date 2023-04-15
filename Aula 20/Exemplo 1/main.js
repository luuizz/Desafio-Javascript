const lista = document.getElementById('listaTarefas');
const novaTarefa = document.getElementById('novaTarefa');
const adicionarTarefa = document.getElementById('adicionarTarefa');
const visualizarTarefas = document.getElementById('visualizarTarefas');

adicionarTarefa.addEventListener('click',() => {
    const tarefa = novaTarefa.value;
    if(tarefa !== '') {
    const itemLista = document.createElement('li');
    itemLista.innerText = tarefa;
    lista.appendChild(itemLista);
    novaTarefa.value = '';
}
});

visualizarTarefas.addEventListener('click',() => {
    const itensLista = lista.children;
    for (let i = 0; i < itensLista.length; i++) {
        console.log(itensLista[i].innerText);
    }
});