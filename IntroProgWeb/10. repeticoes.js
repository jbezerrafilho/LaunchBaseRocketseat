const alunosTurmaA =  [
    {
    nome: 'José',
    nota: 10 
    },
    {
    nome: 'Júlio',
    nota: 5
    },
    { 
    nome: 'Jivago',
    nota: 2
    },
    {
    nome: 'Magno',
    nota: 7 
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
    },
    {
    nome: 'Naty',
    nota: 7
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++ ) {
       soma = (soma + alunos[i].nota) 
    }
    const media = (soma / alunos.length).toFixed(2)
    return media

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



