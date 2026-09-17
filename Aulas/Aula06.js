const prompt = require('prompt-sync')();

const anoAtual = 2026
const anoNascimento = Number(prompt('Em qual ano você nasceu ?'))
const idade = anoAtual - anoNascimento
console.log('Sua idade é de ' + idade + ' anos')