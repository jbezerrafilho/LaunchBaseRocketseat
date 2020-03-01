// percorrendo array usuarios e exibindo as tecnologias de cada person
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

  for (let usuario of usuarios){
      console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}.`)
  }

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCSS(usuario){
    for (let tecnologia of usuario.tecnologias){
        if (tecnologia == 'CSS') return true
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
    if (usuarioTrabalhaComCSS){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS.`)
    }
}