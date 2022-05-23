const express = require("express");
const aplicacao = express();
const bodyParser = require("body-parser");
const connection = require('./database/database')
//Database

connection.authenticate()
          .then(() => {
            console.log('Conexão realizada com o banco de dados1');
          })
          .catch((msgErro) => {
            console.log('Conexão falhou');
          })


//falar para EXPRESS usar EJS como VIEW Engine
aplicacao.set("view engine", "ejs");
aplicacao.use(express.static("public"));

//body parser
aplicacao.use(bodyParser.urlencoded({extended: false}))
aplicacao.use(bodyParser.json())


aplicacao.get("/", (req, res) => {
  res.render("index");
})

aplicacao.get("/perguntar", (req, res) => {
  res.render("perguntar")
})

aplicacao.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo
  var descricao = req.body.descricao
  res.send('Formulário recebido! O Título é: ' + titulo + " " + " descricao da pergunta: " + descricao)
})

aplicacao.listen(8080, () => {
  console.log("Funcionando servidor");
})
