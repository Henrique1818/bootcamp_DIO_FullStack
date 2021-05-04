let alunos = [
    {
        name: 'ana',
        year: 13
    },
    {
        name: 'pedro',
        year: 12
    }
];

function findName(name) {
    let foundName = alunos.find(item => item.name === name);
    if(!foundName) return console.log('Aluno(a) não encontrado(a)');

    return console.log(`Aluno(a) ${foundName.name} foi encontrado(a)`);
}

findName('maria');