const name = 'Júlia'
const gender = 'F'
const age = 62
const due = 22

let rule = age + due
let message = ""

if (gender === 'F') {
    if (rule >= 85) {
        message  = 'você pode se aposentar!'
    } else {
        let debt = 85 - rule
        message = `você ainda não pode se aposentar, precisa contribuir por mais ${debt} anos.`
    }
} else if (rule >= 95 ){
    message = 'você pode se aposentar'
} else {
    let debt = 95 - rule
    message = `você ainda não pode se aposentar, precisa contribuir por mais ${debt} anos`
}

console.log(`${name},`, message)


