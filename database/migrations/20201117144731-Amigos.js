'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('amigos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true,
    },
      
      usuarios_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'usuario',
          key:'id'
        }
      },

      amigo_id: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model:'usuario',
          key:'id'
        }
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('amigos');
  }

};