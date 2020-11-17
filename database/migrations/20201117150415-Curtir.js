'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('curtir', {
      usuarios_id: {
        type:Sequelize.INTEGER,
    },

   
    
    postagem_id: {
        type: Sequelize.INTEGER,
        allownull: false 
    },

    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('curtir');

  }
};
