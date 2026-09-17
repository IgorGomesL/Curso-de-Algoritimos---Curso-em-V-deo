const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Digite um número'))
console.log('numero1')

if (numero1 % 2 == 0) {
    console.log('O número ' + numero1 + ' é par')
}

else {
    console.log('O número ' + numero1 + ' é impar')
}

