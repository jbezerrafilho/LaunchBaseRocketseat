const alunosTurmaA =  [
    {
    nome: 'José',
    nota: 10 
    },
    {
    nome: 'Júlio',
    nota: 8
    },
    { 
    nome: 'Jivago',
    nota: 9
    }
]

const alunosTurmaB =  [
    {
    nome: 'Gaby',
    nota: 10 
    },
    {
    nome: 'Belle',
    nota: 10
    },
    { 
    nome: 'Paty',
    nota: 10
    }
]

function calculaMedia(alunos) {
    return ((alunos[0].nota + alunos[1].nota + alunos[2].nota)/3).toFixed(2)
}

const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

function enviaMesagem(media, turma) {
    if (media > 5){
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log (`A média da ${turma}é menor que 5. Esutde mais!`)
    }
}


enviaMesagem(media1, 'turma A')
enviaMesagem(media2, 'turma B')



