const usuarios = [
    {nome: 'Carlos', tecnologias: ['HTML', 'CSS']},
    {nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS']},
    {nome: 'Tuane', tecnologias: ['HTML', 'Node.js']}
]

function mostraTecnologia(a) {
    for (let i = 0; i < a.length; i++) {
      console.log(`${a[i].nome} trabalha com ${a[i].tecnologias.join(', ')}`)
    }
}

  mostraTecnologia(usuarios)



function checaSeUsuarioUsaCSS(users){
    for (let i = 0; i < users.length; i++){
        const usuarioTrabalhaComCSS = users[i].tecnologias.indexOf('CSS');
    if(usuarioTrabalhaComCSS >= 0){
        console.log(`O usuário ${users[i].nome} trabalha com CSS`);
    }
    }
}

checaSeUsuarioUsaCSS(usuarios);


