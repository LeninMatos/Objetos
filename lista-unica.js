const clientes = [
    {
        nome: "Lênin",
        cpf: "0061224518637",
        dependentes: [{
            nome: "Tomás",
            parentesco: "Filho",
            dataNasc: "05/09/2018",
        },
        {
            nome: "Ana",
            parentesco: "Esposa",
            dataNasc: "05/06/1987",

        }]
    },
    {
        nome: "Juliana",
        cpf: "0061224518637",
        dependentes: [{
            nome: "Laura",
            parentesco: "Filha",
            dataNasc: "06/02/2018",

        },
        {
            nome: "Pedro",
            parentesco: "Esposo",
            dataNasc: "01/12/1979",

        }]
    }
]

const listaDependente = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependente)