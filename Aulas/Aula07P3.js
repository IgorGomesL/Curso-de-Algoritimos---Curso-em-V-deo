const prompt = require('prompt-sync')();

const peso = Number(prompt('Qual o seu peso ?'));
console.log('Meu peso é de ' + peso + ' Kg');

const altura = Number(prompt('Qual a sua altura ?'));
console.log('Meu altura é de ' + altura + ' metros');

const imc = peso / (altura ** 2);
console.log('O IMC é de ' + imc.toFixed(2))

if ((imc >= 18.5) && (imc < 25)) {
    console.log('Parabéns você está no seu peso ideal')
}

else {
    console.log('Você não está na faixa de peso ideal')
}