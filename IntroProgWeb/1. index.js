// criar um cálculo de méia
// Podemos criar varáveis de três maneiras:
// const (variável valor constante), var (escopo global) e let (escopo local, não pode ser definida)
//diferenças: 

const aluno = 'José'
const aluno02 = 'Júlio'
const aluno03 = `Jivago e ${aluno}`
const nA01 = 9.8
const nA02 = 10
const nA03 = 5

const media = (nA01 + nA02 + nA03)/3

// se a média for maior que 5, parabenizar a turma

if (media > 5){
    console.log(`A nota foi de ${media}, parabéns!!`)
}else {
    console.log('Precisa estudar mais!!')
}

console.log(media>5)