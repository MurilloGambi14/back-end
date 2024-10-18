const protocolo = 'http://'
const baseURL = 'localhost:3000'
const filmesEndpoint = '/filmes'

async function obterFilmes() {
    
    const URLcompleta = `${protocolo}${baseURL}${filmesEndpoint}`
    const filmes = (await axios.get(URLcompleta)).data
    let tabela = document.querySelector('.filmes')
    let corpotabela = tabela.getElementsByTagName('tbody')[0]

    for (let filme of filmes) {
      let linha = corpotabela.insertRow(0)
      let celulatitulo = linha.insertCell(0)
      let celulasinopse = linha.insertCell(1)
      celulatitulo.innerHTML = filme.titulo
      celulasinopse.innerHTML = filme.sinopse
    }
    
    console.log(filmes)
}


// async quer dizer que pode demora um pouco para executar

async function cadastrarfilme() {
    console.log('CADASTRO')
} 