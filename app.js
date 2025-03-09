let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome === '') {
        alert("Por favor, insira um nome");
        return false
    }
    if (nome.trim() === '') { // trim() remove espaços em branco do início e do fim da string
        alert("Por favor, insira um nome válido");
        return false;
    }
    if (amigos.includes(nome)) { // includes() verifica se um elemento está presente em um array
        alert("Esse nome já foi adicionado!");
        return false;
    }
    
    amigos.push(nome);
    atualizar_lista();
    limpar_campo();
}

function limpar_campo() {
    nome = document.getElementById('amigo');
    nome.value = '';
}

function atualizar_lista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos para sortear!");
        return false;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let lista = document.getElementById('resultado');
    lista.innerHTML = `<li> O amigo sorteado é: ${sorteado}.</li>`;
}

