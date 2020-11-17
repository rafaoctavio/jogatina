'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Personagens', { 
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allownull: false
    },

    usuarios_id: {
        type:Sequelize.INTEGER,

    },

    nome:Sequelize.STRING,
    
    vitalidade: {
        type: Sequelize.INTEGER,
        allownull: false 
    },
    mana: {
        type: Sequelize.INTEGER,
        allownull: false 
    },
    inteligência: {
        type: Sequelize.INTEGER,
        allownull: false 
    },
    forca: {
        type: Sequelize.INTEGER,
        allownull: false 
    },
    
    });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Personagens');
     
  }
};
