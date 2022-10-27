function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
    this.sacar = function (valor) {
        this.sadlo -= valor
    }
}

const lenin = new cliente("Lenin", "1351.687451.97", "lenin@gmail.com", "1.000");

console.log(lenin)