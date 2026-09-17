const prompt = require('prompt-sync')();

const anoAtual = Number(prompt('Em que ano estamos ?'))
console.log('O ano atual é ' + anoAtual)

const anoNascimento = Number(prompt('Em que você nasceu ?'))
console.log('No ano de ' + anoNascimento)

const idade = anoAtual - anoNascimento

console.log('Em ' + anoAtual + ' Você terá ' + idade + ' anos' )

if (idade >= 21) {
    console.log('Você já terá atingido a maioridade')
}