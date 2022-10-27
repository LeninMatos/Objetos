class Cliente {
    constructor(nome, email, cpf, saldo) { //Atributos
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) { //Metodo 01
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo) //Metodo 02
    }
}
class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}
const andre = new ClientePoupanca("Andre", "a@mail.com", "12312312312", 100, 200)

andre.depositar(50)
andre.depositarPoupanca(50)