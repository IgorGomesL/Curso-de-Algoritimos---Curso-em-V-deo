const prompt = require('prompt-sync')();

const nome = prompt("Qual é o seu nome? ");
console.log(nome);
console.log('Muito prazer, ' + nome);

const numero1 = Number(prompt("Digite um número"));
console.log(numero1);
const numero2 = Number(prompt("Digite um outro número"));
console.log(numero2);

const soma = numero1 + numero2;
const media = soma / 2;
console.log('A soma de ' + numero1 + ' e ' + numero2 + ' é de ' + soma + ', e a média é de ' + media)

