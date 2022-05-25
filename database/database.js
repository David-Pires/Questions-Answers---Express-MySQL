const Sequelize = require('sequelize')

//Sequelize('') passar o nome do banco que iremos nos conectar
const connection = new Sequelize('guiaperguntas', 'root', '2', {
  host: 'localhost',
  dialect: 'mysql'
})
//test
module.exports = connection;