const protocolo = 'http://'
const baseURL = 'localhost:3000'
const filmesEndpoint = '/filmes'

function exibirfilmes(filmes) {
    let tabela = document.querySelector('.filmes')
    let corpotabela = tabela.getElementsByTagName('tbody')[0]
    corpotabela.innerHTML = ""
    for (let filme of filmes) {
        let linha = corpotabela.insertRow(0)
        let celulatitulo = linha.insertCell(0)
        let celulasinopse = linha.insertCell(1)
        celulatitulo.innerHTML = filme.titulo
        celulasinopse.innerHTML = filme.sinopse
    }

}


async function obterFilmes() {

    const URLcompleta = `${protocolo}${baseURL}${filmesEndpoint}`
    const filmes = (await axios.get(URLcompleta)).data
    exibirfilmes(filmes)
}


// async quer dizer que pode demora um pouco para executar

async function cadastrarfilme() {
    const URLcompleta = `${protocolo}${baseURL}${filmesEndpoint}`
    let tituloinput = document.querySelector('#tituloinput')
    let sinopseinput = document.querySelector('#sinopseinput')
    let titulo = tituloinput.value
    let sinopse = sinopseinput.value
    tituloinput.value = ""
    sinopseinput.value = ""
    if (titulo && sinopse) {
        const filmes = (await axios.post(URLcompleta, { titulo, sinopse })).data
        exibirfilmes(filmes)
    }
    else {
        let alert = document.querySelector('.alert')
        alert.classList.add('show')
        alert.classList.remove('d-none')
        setTimeout(() => {
            alert.classList.remove('show')
            alert.classList.add('d-none')
        }, 2000);
    }



}


