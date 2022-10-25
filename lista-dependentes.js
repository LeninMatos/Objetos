const cliente = {
    nome: "André",
    idade: 36,
    cpf: "167434732164",
    email: "andre@email.com",
    fones: ["5516997712838", "551999830952"],
    dependentes: {
        nome: ["Sara", "Pedro"],
        parentesco: ["Filha", "Filho"],
        dataNasc: ["20/03/1983", "20/03/1986"]
    }
}
//console.log(cliente.dependentes)

const cliente2 = {
    nome: "André",
    idade: 36,
    cpf: "167434732164",
    email: "andre@email.com",
    fones: ["5516997712838", "551999830952"],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filha",
        dataNasc: "20/03/1983"
    }]
}

cliente2.dependentes.push({
    nome: "Samia",
    parentesco: "Filha",
    dataNasc: "10/06/1989"
}
)

//console.log(cliente2.dependentes)

const filhaMaisNova = cliente2.dependentes.filter (dependente => dependente.dataNasc === "10/06/1989")

console.log(filhaMaisNova[0].nome)

