const prompt = require('prompt-sync')();

const reais = Number(prompt('Quantos Reais eu tenho ?'))
const valorDolar = 5.13
const conversao = reais / valorDolar

console.log('Com ' + reais + ' reais, eu consigo comprar ' + conversao + ' dólares')
