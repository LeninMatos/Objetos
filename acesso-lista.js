const cliente = {
    nome: "André",
    idade: 36,
    cpf: "167434732164",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

// dentro do objeto "cliente" acesse o item "nome", que está no index [0] do array chaves
console.log(cliente[chaves[0]])
chaves.forEach(info => console.log(cliente[info]))

chaves.forEach(function (info) {
        return console.log(cliente[info])
    })