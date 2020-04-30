var nome = document.querySelector('input.nome')
var retorno = document.querySelector('ul.retorno')

function retornaDados(json) {
    retorno.innerHTML = ""
    for(i=0; i < json.length; i++) {
        repositorios = document.createElement('li')
        repositorios.innerHTML = json[i].name
        retorno.appendChild(repositorios)
    }
}

function buscar() {
    retorno.innerHTML = "Carregando..."
    var nomeBusca = nome.value
    fetch('https://api.github.com/users/' + nomeBusca + '/repos', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => retornaDados(json))
}