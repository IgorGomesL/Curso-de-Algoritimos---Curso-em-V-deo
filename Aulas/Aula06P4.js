const prompt = require('prompt-sync')();

const valorCompra = Number(prompt('Qual o valor do produto ?'))
const valorImposto = (valorCompra * 60) / 100

console.log('O imposto será de US$' + valorImposto.toFixed(2) + ' dólares')