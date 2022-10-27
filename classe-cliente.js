class Cliente {
    constructor(nome, email, cpf, saldo) { //Atributos
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor) { //metodo 01
        this.saldo += valor
    }
    sacar(valor) { //metodo 02
        this.saldo -= valor
    }
    exibirSaldo() {//metodo 03
        console.log(this.saldo)
    }
}

const andre = new Cliente("André", "andre@email.com", "15632469713", 100)

console.table(andre)
andre.exibirSaldo()
andre.depositar(50)
andre.exibirSaldo()
andre.sacar(70)
andre.exibirSaldo()


