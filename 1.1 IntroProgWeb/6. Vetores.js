const alunos =  [
    {
    nome: 'José',
    nota: 10 
    },
    {
    nome: 'Júlio',
    nota: 10
    },
    { 
    nome: 'Jivago',
    nota: 10
    }
]

nomesAlunos = [ 'José', 'Júlio', 'Jivago']

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

// se a média for maior que 5, parabenizar a turma

if (media > 5){
    console.log(`A média foi de ${media}, parabéns!!`)
}else {
    console.log('Precisa estudar mais!!')
}
console.log(alunos)
console.log(nomesAlunos[1])

//console é um objeto
