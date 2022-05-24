const Sequelize = require('sequelize')

//Sequelize('') passar o nome do banco que iremos nos conectar
const connection = new Sequelize('guiaperguntas', 'root', 'test23', {
  host: 'localhost',
  dialect: 'mysql'
})
//test
module.exports = connection;