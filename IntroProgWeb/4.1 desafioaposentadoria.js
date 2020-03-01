const name  = 'Silvana'
const gender = 'F'
const age  = 60
const timeTax = 34

const ruleTimeTax = age + timeTax

const manCanRetire = gender == 'M' && timeTax >= 35 && ruleTimeTax >= 95
const womanCanRetire = gender == 'F' && timeTax >= 30 && ruleTimeTax >= 85

if (manCanRetire || womanCanRetire) {
    console.log (`${name}, seu pedido de aposentadoria foi DEFERIDO!`)
} else {
    console.log(`${name}, seu pedido de aposentadoria foi INDEFERIDO!`)
}