let listaNomes = [];
let listaNomesElemento = document.getElementById("lista-nomes");
let adicionarNomeBotao = document.getElementById("adicionar-nome");
let nomeInput = document.getElementById("nome");
function adicionarNome() {
    let nome = nomeInput.value;
    if (nome === "") {
        alert("Por favor, insira um nome");
        return;
    }
    listaNomes.push(nome);
    let li = document.createElement("li");
    li.textContent = nome;
    listaNomesElemento.appendChild(li);
   nomeInput.value = "";
}


function limparLista() {
    listaNomesElemento.innerHTML = "";
    listaNomes = [];
    nomeInput.value = "";
    alert("Lista limpa!");
}

