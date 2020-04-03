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
  express: server
})

server.listen(5000, function () { 
  console.log('server is running')
})

server.get('/', function (req, res) {
  // return res.send('Hello World New!')
  return res.render("about")
})
server.get('/portfolio', function (req, res) {
  return res.render("portfolio", { itens: videos})
})

server.use(function(req, res) {
  res.status(404).render('not-found')
})
  

// npm install -D nodemon => 'D" => Desenvolvimento
// no package.json - script - altera o 'start'
// npm install nunjucks => template engine