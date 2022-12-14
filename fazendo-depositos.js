const cliente = {
    nome: "André",
    idade: 36,
    cpf: "167434732164",
    email: "andre@email.com",
    fones: ["5516997712838", "551999830952"],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filha",
        dataNasc: "20/03/1983"
    },
    {
        nome: "Samia",
        parentesco: "Filha",
        dataNasc: "10/06/1989"
    }],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    },
    sacar: function(valor) {
        this.saldo -= valor
    }
}

console.log(cliente.saldo)

cliente.depositar(30)

console.log(cliente.saldo)

cliente.sacar(80)

console.log(cliente.saldo)