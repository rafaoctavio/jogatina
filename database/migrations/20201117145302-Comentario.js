'use strict';
const  { usuario } = require('../../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comentario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      usuarios_id: {
        type: Sequelize.INTEGER,
        references: {
          model:usuario,
          key:id
        }
    
      },

      postagem_id: {
        type: Sequelize.INTEGER,
        allownull: false
      },

      conteudo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

    }, );

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('comentario');

  }
};
