class Prato {
    constructor(nome, descricao, imagem, valor) {
        this.nome = nome
        this.descricao = descricao
        this.imagem = imagem
        this.valor = valor
    }
    showInforme() {
        console.log(`nome: ${this.nome}, descricao: ${this.descricao}, imagem: ${this.imagem}, valor: ${this.valor}`)
    }
}
class Restaurante {
    constructor() {
        this.pratos = []
    }
    cadastrarPrato() {
        var nome = prompt("Insira o nomme do prato")
        var descricao = prompt("Insira a descricao do prato")
        var imagem = prompt("Insira a imagem do prato")
        var valor = prompt("Insira o valor do prato")
        var prato = new Prato(nome, descricao, imagem, valor)
        this.pratos.push(prato)

    }
    getPrato(nome) {

        for (var index = 0; index < this.pratos.length; index++) {
            if (this.pratos[index].nome == nome) {
                return this.pratos[index]
            }

        }

    }
}
var restaurante = new Restaurante()
restaurante.cadastrarPrato()
restaurante.cadastrarPrato()
restaurante.cadastrarPrato()
restaurante.cadastrarPrato()
var nomeDoPrato = prompt("Insira o nome do prato")
var pratoescolhido = restaurante.getPrato(nomeDoPrato)
if (pratoescolhido != undefined) {
    console.log(pratoescolhido.showInforme())
} else {
    console.log("Prato nao encotrado")
}