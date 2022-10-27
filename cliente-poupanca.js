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
function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ju = new clientePoupanca("Ju", "454876547.65", "ju@email.com", 100, 200);

console.log(ju)

clientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor    
}
clientePoupanca.prototype.sacarPoup = function (valor) {
    this.saldoPoup -= valor    
}

clientePoupanca.prototype.transPoup = function (valor) {
    this.saldoPoup += valor
    this.saldo -= valor   
}

ju.depositarPoup(30)

console.log(ju)

ju.sacarPoup(80)

console.log(ju)

ju.transPoup(100)

console.log(ju)