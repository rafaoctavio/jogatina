'use strict';
const  { usuario } = require('../../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('amigos', {
      usuarios_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
          model:usuario,
          key:id
        }
      },

      amigo_id: {
        type: Sequelize.INTEGER,
        allownull: false
      },

      senha: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('amigos');
  }

};