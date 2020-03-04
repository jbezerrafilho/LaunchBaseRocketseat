const classA = [
    {
        name: 'José',
        grade: 8
    },
    {
        name: 'Júlio',
        grade: 8.9
    },
    {
        name: 'Jivago',
        grade: 9
    }
]

const classB = [
    {
        name: 'Gaby',
        grade: 10
    },
    {
        name: 'Belle',
        grade: 10
    },
    {
        name: 'Paty',
        grade: 10,
    }
]

function calculateAverage(students) {
    // return ((students[0].grade + students[1].grade + students[2].grade) / 3).toFixed(2)
    let suma = 0
    for (let i = 0; i < students.length; i++) {
        suma = suma + students[i].grade 
    }
    
    const average = (suma / students.length).toFixed(2)
    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`A média da ${turma} foi de ${average}. Parabéns!`)
    } else {
        console.log(`A média da ${turma}é menor que 5. Esutde mais!`)
    }
}

// vamos criar uma propriedade Flunked para todos os students em que será sinalizado
// true caso tirem gradea baixo de 5. Para isso criamos uma função.
function markAsFlunked(student) {
    student.Flunked = false
    
    if (student.grade < 5) {
        student.Flunked = true
    }
    // console.table(students) => organiza a saida do console numa tabela
}

function sendMessageFlunked(student) {
    if (student.Flunked == true) // não precisa uasr o true. já subtende que a setença student.Flunked é true
        console.log(`O student(a) ${student.name} está Flunked!`)
}

function studentFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageFlunked(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'class A')
sendMessage(average2, 'class B')

studentFlunked(classA)
studentFlunked(classB)

//Para formatar o código inteiro: Ctrl + shif + P => formar selection
