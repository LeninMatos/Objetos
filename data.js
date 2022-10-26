var data = new Date();
var dia =data.getDate()
var mes = (data.getMonth() + 1)
var ano = data.getFullYear();
dataAtual = dia + mes + ano;
console.log(dataAtual);
console.log(typeof(dataAtual))