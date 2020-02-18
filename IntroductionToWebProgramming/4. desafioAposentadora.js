const nome = 'Júlia'
const sexo = 'F'
const idade = 62
const contribuicao = 22

let regra = idade + contribuicao
let message = ""

if (sexo === 'F') {
    if (regra >= 85) {
        message  = 'você pode se aposentar!'
    } else {
        let faltacontribuicao = 85 - regra
        message = `você ainda não pode se aposentar, precisa contribuir por mais ${faltacontribuicao} anos.`
    }
} else if (regra >= 95 ){
    message = 'você pode se aposentar'
} else {
    let faltacontribuicao = 95 - regra
    message = `você ainda não pode se aposentar, precisa contribuir por mais ${faltacontribuicao} anos`
}

console.log(`${nome},`, message)


