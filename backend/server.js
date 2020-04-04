// utilizamos o gerenciador npm para buscar as dependências do projeto
// npm => node package manager
// npm init -y  => 'y' para não fazer perguntas
// npm install express => instala o servidor

const express = require('express') // importa do node-modules
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()


// servidor usa arquivos estáticos
server.use(express.static('public'))

//configurando o motor View como Numjucks - 'njk'
server.set('view engine', 'njk')
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true //usado apenas para desenvolvimento
})

server.listen(5000, function () { 
  console.log('server is running')
})

server.get('/', function (req, res) {
  // return res.send('Hello World New!')
  const about = {
    avatar_url: 'https://avatars0.githubusercontent.com/u/50915483?s=400&u=2d7236627e92a1d812f0309737137f36291e7d08&v=4',
    name: 'José Bezerra',
    role: 'Aluno - LaunchBase',
    description: 'Aprendiz de programação full-stack das principais tecnologias do mercado pela <a href="https://rocketseat.com.br" target="blank">Rocketseat</a>.',
    links: [
        {name: 'github', url: 'https://github.com/josebezerrafilho'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/josbezfi/'},
        {name: 'twitter', url: 'https://twitter.com/jailheminau'}
    ]
  }


  return res.render("about", {about}) // não preciso usar chaves, pois 
  // o nome da variável é igual a chave.
})

server.get('/portfolio', function (req, res) {
  return res.render("portfolio", { itens: videos})
})

server.get('/video' , function(req, res){
  const id = req.query.id
  const video = videos.find(function(video){
    return video.id == id
  })
  if (!video) {
    return res.send('Video not found!')
  }
  return res.render('video', {item: video})
})


server.use(function(req, res) {
  res.status(404).render('not-found')
})
  

// npm install -D nodemon => 'D" => Desenvolvimento
// no package.json - script - altera o 'start'
// npm install nunjucks => template engine