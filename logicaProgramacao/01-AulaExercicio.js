// criar um programa que calcule a média de nota, das seguintes notas:
// nota 1: 5   nota 2: 7   nota 3: 10    nota 4: 3

const notas = {
    nota1: 5,
    nota2: 7,
    nota3: 10,
    nota4: 3
}

let media = Number(notas.nota1 + notas.nota2 + notas.nota3 + notas.nota4) / 4;

console.log('Média é:', media);