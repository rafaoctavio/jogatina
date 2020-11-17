'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('amigos', {
      usuarios_id: {
        type: DataType.INTENGER,
        primaryKey: true,
        autoIncrement: true
      },

      amigo_id: {
        type: DataType.INTENGER,
        allownull: false
      },

      senha: {
        type: DataType.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('amigos');
  }

};
