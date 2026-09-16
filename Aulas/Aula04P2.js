const prompt = require('prompt-sync')();

const Lado1 = Number(prompt('Digite o valor de um lado'))
const Lado2 = Number(prompt('Digite o valor outro lado'))
const Lado3 = Number(prompt('Digite o valor de um outro lado'))

if ((Lado1 < Lado2 + Lado3) && (Lado2 < Lado1 + Lado3) && (Lado3 < Lado1 + Lado2)) {
    console.log('Pode formar um triangulo')
}

else if ((Lado1 == Lado2) && (Lado2 == Lado3)) {
    console.log('Triangulo Equilatero')
}
else if ((Lado1 != Lado2) && (Lado2 != Lado3) && (Lado1 != Lado3)) {
    console.log('Triangulo Escaleno')
}
else {
    console.log('Outro Tipo de Triangulo')
}