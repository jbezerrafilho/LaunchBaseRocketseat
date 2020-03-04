const usuarios = [
    {
        nome: 'Sálvio',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Márcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Lúcia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

function somaNumeros(numeros){
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma
}


function calculaSaldo(receitas, despesas) {
    let saldo = 0
    for (let i = 0; i < usuarios.length; i++){
       receitas = somaNumeros(usuarios[i].receitas)
       despesas = somaNumeros(usuarios[i].despesas)
       
       saldo = (receitas - despesas).toFixed(2)
       
       if (saldo > 0) {
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`)
      } else {
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`)
      }
    }
    
}


calculaSaldo()