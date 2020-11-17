'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('curtir', {
      usuarios_id: {
        type:DataType.INTENGER,
        primaryKey: true, 
        autoIncrement: true
    },

   
    
    postagem_id: {
        type: DataType.INTENGER,
        allownull: false 
    },

    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('curtir');

  }
};
