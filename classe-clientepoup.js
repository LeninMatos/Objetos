class Cliente {
    constructor(nome, email, cpf, saldo) { //Atributos
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor) { //metodo 01
        this.saldo += valor
        console.log(`Valor de R$${valor} depositado em Conta Corrente`)
    }
    sacar(valor) { //metodo 02
        this.saldo -= valor
        console.log(`Valor de R$${valor} depositado em Conta Corrente`)
    }
    exibirSaldo() {//metodo 03
       let saldocc = this.saldo
        console.log(`Valor de R$${saldocc} em Conta Corrente`)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) { //Atributos
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor) { //metodo 01
        this.saldoPoupanca += valor
        console.log(`Valor de R$${valor} depositado em Poupança`)
    }
    sacarPoupanca(valor) { //metodo 02
        this.saldoPoupanca -= valor
        console.log(`Valor de R$${valor} sacado de Poupança`)
    }
    exibirSaldoPoupanca() {//metodo 03
        let saldopp = this.saldoPoupanca
        console.log(`Valor de R$${saldopp} na Poupança`)
    }
    transfSaldo(valor) { //metodo 04
        let saldo = this.saldo
        if (valor <= saldo) {
            this.saldoPoupanca += valor
            this.saldo -= valor
        } else {
            return console.log(`Saldo Insuficiente!
Você tentou transferir R$${valor} para a Poupança, mas você tem R$${this.saldo} em Conta Corrente`)
        }

    }
}

const andre = new ClientePoupanca("André", "a@email.com", "222256697", 100, 200)

andre.exibirSaldo()
andre.exibirSaldoPoupanca()
andre.depositar(500)
andre.depositarPoupanca(5)
andre.exibirSaldo()
andre.exibirSaldoPoupanca()
andre.transfSaldo(600)
andre.exibirSaldo()
andre.exibirSaldoPoupanca()






