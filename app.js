//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaFriends = [];




function adicionarAmigo() {
    let nameFriend = document.querySelector('input').value
    let listaAmigosTela = document.getElementById('listaAmigos')

    listaFriends.push(nameFriend)
    clean();

    listaAmigosTela.innerHTML = listaFriends


}

function clean() {
    let nameFriend = document.querySelector('input')
    nameFriend.value = '';

}

function sortearAmigo() {
    amigoSorteado = listaFriends[Math.floor(Math.random() * listaFriends.length)]


    let resultado = document.getElementById('resultado')
    resultado.innerHTML = amigoSorteado

}