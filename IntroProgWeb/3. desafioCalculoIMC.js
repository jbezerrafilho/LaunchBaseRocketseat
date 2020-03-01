const nome = "José"
const peso = 70
const altura = 1.69

let message = ""

imc = peso / (altura * altura)
if (imc >= 30) {
    message = 'você está acima do peso.'
} else  {
    message = 'você NÂO está acima do peso.'
}

console.log(`${nome},`, message)
