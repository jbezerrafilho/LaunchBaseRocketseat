const nome = 'Julia'
const sexo = 'F'
const idade = 62
const contribuicao = 10

var regra = idade + contribuicao

if (sexo === 'F') {
    if (regra >= 85) {
        console.log(`Parabéns ${nome}, você pode se aposentar!`)
    } else {
        var faltacontribuicao = 85 - regra
        console.log( `${nome}, precisar contribuir por mais ${faltacontribuicao} anos.`)
    }
} else if (regra >= 95 ){
    console.log (`Parabéns ${nome}, pode se aposentar!`)
} else {
    var faltacontribuicao = 95 - regra
    console.log(`${nome}, você precisa contribuir por mais ${faltacontribuicao} anos.`)
}