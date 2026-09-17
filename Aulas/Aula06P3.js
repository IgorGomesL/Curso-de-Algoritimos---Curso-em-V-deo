const prompt = require('prompt-sync')();

const temperaturaAtual = Number(prompt('Qual a temperatura atual ?'))
const converterTemperatura = (temperaturaAtual - 32 ) / 1.8

console.log('A temperatura atual é de ' + converterTemperatura.toFixed(1) + ' graus celsius')