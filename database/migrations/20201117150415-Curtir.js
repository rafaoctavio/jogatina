'use strict';
const  { usuario } = require('../../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('curtir', {
      usuarios_id: {
        type:Sequelize.INTEGER,
        references: {
          model:usuario,
          key:id
        }
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
