'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comentario', {
      id: {
        type: DataType.INTENGER,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true,
      },


      usuarios_id: {
        type: DataType.INTENGER,
        primaryKey: true,
        autoIncrement: true
      },


      postagem_id: {
        type: DataType.INTENGER,
        allownull: false
      },

      conteudo: {
        type: DataType.STRING,
        allowNull: false,
      },

    }, );

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('comentario');

  }
};
