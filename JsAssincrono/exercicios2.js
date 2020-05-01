var nome = document.querySelector('input.nome')
var retorno = document.querySelector('ul.retorno')

function retornaDados(json) {
    if(json.length > 0) {
        retorno.innerHTML = ""
        for(i=0; i < json.length; i++) {
            repositorios = document.createElement('li')
            repositorios.innerHTML = json[i].name
            retorno.appendChild(repositorios)
        }
    } else {
        retorno.innerHTML = "Não existe repósitorios com essa busca!"
    }
}

function errorFunction() {
    retorno.innerHTML = "Busca inválida, 404!"
}

function buscar() {
    retorno.innerHTML = "Carregando..."
    var nomeBusca = nome.value
    fetch('https://api.github.com/users/' + nomeBusca + '/repos', {
        method: 'GET'
    })
    .then(function(response) {
        if(response.status === 200) {
            return response.json()
        } else {
            errorFunction()
        }
    })
    .then(json => retornaDados(json))
    .catch(() => {
        errorFunction()
    })
}

/*  Metodo acima é uma combinação do codigo abaixo
1) .then(response => response.json())
2) .then(json => retornaDados(json))

3) .then(function(response) {
    console.log("aqui")
    console.log(response.status)
    console.log(response.json())
})
4) .catch(function(error) {
    console.log("Aqui 2")
    console.log(error.status)
})

A resposta 1 funciona bem, mas eu precisava testar o response dentro dessa função,
então montei o response dentro da chamada 3, após isso, mantive a 2 e a 4 normalmente.
*/