class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    showInforme() {
        console.log(`nome: ${this.nome}, sobrenome: ${this.sobrenome}`)
    }
}
class Contato extends Pessoa {
    constructor(nome, sobrenome, telefone, email, endereco) {
        super(nome, sobrenome)
        this.telefone = telefone
        this.email = email
        this.endereco = endereco
    }
    showInforme() {
        console.log(`nome: ${this.nome}, sobrenome: ${this.sobrenome}, telefone: ${this.telefone}, email: ${this.email}, endereco:${this.endereco}`)
    }

}

class ListaContatos {
    constructor() {
        this.contatos = []
    }
    addNovoContato(contato) {
        this.contatos.push(contato)
    }

    getContato(nome) {
        var index = 0
        while (index < this.contatos.length) {
            if (this.contatos[index].nome == nome) {
                return this.contatos[index]
            }
            index++
        }
    }
    removerContato(nome) {
        var index = this.contato.indexOf(nome)
        this.contatos.splice(index, 1)
        return this.contatos
    }
}
var pessoa1 = new Contato("Guilherme", "Costa", 11976148788, "gui2605costa@gmail.com", "Sitio dos costas")
var pessoa2 = new Contato("Gabriela", "Affonso", 11976148788, "gabi2605costa@gmail.com", "Rua Marilia")
var listaDeContatos = new ListaContatos()
listaDeContatos.addNovoContato(pessoa1)
console.log(pessoa1.showInforme())