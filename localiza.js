class Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao) {
        this.placa = placa
        this.ano = ano
        this.cor = cor
        this.modelo = modelo
        this.quilometragem = quilometragem
        this.valorDiario = valorDiario
        this.observacao = observacao
    }
}
class Esportivo extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao, tempo) {
        super(placa, ano, cor, modelo, quilometragem, valorDiario, observacao)
        this.tempo = tempo
        this.melhorias = []
    }
}
class Utilitario extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao, tamanhoBagageiro, kmPorLitro, passageiros) {
        super(placa, ano, cor, modelo, quilometragem, valorDiario, observacao)
        this.tamanhoBagageiro = tamanhoBagageiro
        this.kmPorLitro = kmPorLitro
        this.passageiros = passageiros
    }

}
class Pessoa {
    constructor(nome, cpf, idade, endereco) {
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
        this.endereco = endereco
        this.telefone = telefone
    }
}
class Cliente extends Pessoa {
    constructor(nome, cpf, idade, dtNascimento, carteira, fotoCarteira, anoVencimentoCarteira, endereco, telefone, email) {
        super(nome, cpf, idade, endereco, telefone)
        this.dtNascimento = dtNascimento
        this.carteira = carteira
        this.fotoCarteira = fotoCarteira
        this.anoVencimentoCarteira = anoVencimentoCarteira
        this.email = email
    }
}
class Funcionario extends Pessoa {
    constructor(nome, cpf, idade, endereco, telefone, dtContratacao, salario, qtAlugueis, status) {
        super(nome, cpf, idade, endereco, telefone)
        this.dtContratacao = dtContratacao
        this.salario = salario
        this.qtAlugueis = qtAlugueis
        this.status = status
    }
}
class Reserva {
    constructor(cliente, code, status, dtInicio, dtFim) {
        this.cliente = cliente
        this.code = code
        this.status = status
        this.dtInicio = dtInicio
        this.dtFim = dtFim
    }
}
class Promocao {
    constructor(titulo, descricao, dtValidade) {
        this.titulo = titulo
        this.descricao = descricao
        this.dtValidade = dtValidade
    }
}
class Localiza {
    constructor() {
        this.clientes = []
        this.funcioanarios = []
        this.reserva = []
        this.carros = []
    }
    addCliente(nome, cpf, idade, dtNascimento, carteira, fotoCarteira, anoVencimentoCarteira, endereco, telefone, email) {
        let novoCliente = new Cliente(nome, cpf, idade, dtNascimento, carteira, fotoCarteira, anoVencimentoCarteira, endereco, telefone, email)
        this.clientes.push(novoCliente)
        return novoCliente
    }
    addFuncionario(nome, cpf, idade, endereco, telefone, dtContratacao, salario, qtAlugueis, status) {
        let novoFuncionario = new Funcionario(nome, cpf, idade, endereco, telefone, dtContratacao, salario, qtAlugueis, status)
        this.funcioanarios.push(novoFuncionario)
        return novoFuncionario
    }
    addCarro(tipoCarro) {
        switch (tipoCarro) {
            case "Esportivo":
                let novoEsportivo = new Esportivo("ABCD1234", 2020, "Vermelho", "Modelo1", 0, 50.00, "Carro esportivo", 10)
                this.carros.push(novoEsportivo)
                return novoEsportivo
            case "Utilitario":
                let novoUtilitaro = new Utilitario("ABCD1234", 2020, "Vermelho", "Modelo1", 0, 50.00, "Carro esportivo", 4, 60)
                this.carros.push(novoUtilitaro)
                return novoUtilitaro
            default:
                console.error("Erro ao cadastrar carro informado")
        }
    }

}
var localiza = new localiza()
localiza.addCarro("Esportivo")
console.log(localiza.getCarros())