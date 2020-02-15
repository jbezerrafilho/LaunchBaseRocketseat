// criar um cálculo de méia
// Observe que estamos usando objetos
// Estes possuem propriedades - atributos e funcionalidades

const aluno01 =  {
    nome: 'José',
    nota: 10
}

const aluno02 = {
    nome: 'Júlio',
    nota: 10
}

const aluno03 = { 
    nome: 'Jivago',
    nota: 10
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

// se a média for maior que 5, parabenizar a turma

if (media > 5){
    console.log(`A nota foi de ${media}, parabéns!!`)
}else {
    console.log('Precisa estudar mais!!')
}

//console é um objeto
