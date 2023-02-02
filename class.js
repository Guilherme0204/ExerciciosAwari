class Pessoa {
    constructor(nome, email, telefone, endereco) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.endereco = endereco
    }
}
var listaContatos = []

function addContato(contato) {
    listaContatos.push(contato)
}

function getContato(nome) {
    for (var index = 0; index < listaContatos.length; index++) {
        if (listaContatos[index].nome == nome)
            return listaContatos[index]
        //console.log(listaContatos[index])
    }
    //return listaContatos.find(contato => contato.nome == nome)
}

function removerContato(nome) {
    var index = listaContatos.indexOf(nome)
    listaContatos.slice(index, 0)
    return listaContatos
}
var nome1 = new Pessoa("Guilherme", "gui2605costa@gmail.com", 976148788, "Rua Marilia")
addContato(nome1)


var nome2 = new Pessoa("Gabi", "guilhermefontanacosta@gmail.com", 9986387570, "Sitio dos costas")
addContato(nome2)
//console.log(listaContatos)
//console.log(getContato("Gabi"))
//console.log(getContato("gui2605costa@gmail.com"))
console.log(removerContato("nome2"))