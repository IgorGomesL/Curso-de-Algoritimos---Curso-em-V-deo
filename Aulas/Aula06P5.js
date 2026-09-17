const prompt = require('prompt-sync')();

const valorEmprestimo = Number(prompt('Qual o valor do empréstimo ?'))
const quantidadeParcelas = Number(prompt('Quantas parcelas ?'))

const valorParcelado = (valorEmprestimo / quantidadeParcelas) 

const valorJuros = (valorParcelado * 20) / 100

console.log('Vou pagar ' + quantidadeParcelas + ' Parcelas de ' + (valorJuros + valorParcelado) + ' Reais')