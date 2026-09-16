const prompt = require('prompt-sync')();

const angulo = Number(prompt('Digite um Angulo'))
console.log(angulo)
const seno = Math.sin(angulo * (Math.PI / 180));
console.log('O seno de ' + angulo + ' é igual a ' + seno.toFixed(1))