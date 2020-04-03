// 1. npm init -y
// 2. npm instal express
// 3. criamos a pasta views para armazenar as páginas
// 4. instalamos o template engine ('nunjucks') e importamos

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'njk') // 5. configurando o servidor para 
//usar um template engine

server.use(express.static('public')) // 7. definindo pasta 
// que será monitorada pelo servidor.

nunjucks.configure('views', {
  express: server
}) //6. Definimos o servidor e a variável
// que configurada com o view engine


server.listen(3333, function() {
  console.log('servidor em testes')
})

server.get('/', function(req, res){
  return res.render('about')
})

server.get('/courses', function(req, res){
  return res.render('courses')
})

