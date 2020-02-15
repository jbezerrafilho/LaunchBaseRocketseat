/*
 OPERADORES DE COMPARAÇÃO

 >    Maior
 <    Menor
 >=   Maior igual a
 <=   Menor igual a
 ==   Igual a
 ===  Igual e do mesmo tipo
 !=   Diferente de
 !==  Diferente, inclusive do tipo

 */

// Observe a lógica para liberar entrada....
 
//  const idade = 16

//  if (idade >= 18) {
//      console.log('Deixa entrar!')
//  } else {
//      console.log('Bloquear entrada!')
//  }

//  if (idade === 17) {
//      console.log('Volte quando tiver 18 anos!')
//  }

 //Vamos diminuir o código usando operadores lógicos

 const idade = 17

 if (!(idade >= 18) || (idade === 17)){
     console.log('Bloquear entrada')
 } else {
     console.log('Deixa entrar!')
 }



