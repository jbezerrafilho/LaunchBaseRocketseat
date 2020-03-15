// utilizamos o gerenciador npm para buscar as dependências do projeto
// npm - node package manager
// npm init -y  => 'y' para não fazer perguntas
// npm install express => instala o servidor

const express = require('express')
const nunjucks = require('nunjucks')


const server = express()

server.use(express.static('public')) // servido arquivos estáticos

//config engine pro server e config nunjucks
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
  return res.render("portfolio")
})

// npm install -D nodemon => 'D" => Desenvolvimento
// no package.json - script - altera o 'start'
// npm install nunjucks => template engine