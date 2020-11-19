'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('compartilhar', {
      usuarios_id: {
        type:Sequelize.INTEGER,
        references: {
          model:'usuario',
          key:'id'
        }
    },

   
    
    postagem_id: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model:'postagem',
          key:'id'
        }
    },

    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('compartilhar');

  }
};
