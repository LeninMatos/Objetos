const cliente = {
    nome: "André",
    idade: 36,
    cpf: "167434732164",
    email: "andre@email.com",
    fones: ["5516997712838", "551999830952"]
}

cliente.dependentes = {
    nome: ["Sara", "Pedro"],
    parentesco: ["Filha", "Filho"],
    dataNasc: ["20/03/1983", "20/03/1986"]
}

console.log(cliente)

cliente.dependentes.nome[0] = "Sara Silva"

console.log(cliente)

