'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Personagens', { 
    id: {
        type:DataType.INTENGER,
        primaryKey: true, 
        autoIncrement: true,
        allownull: false
    },

    usuarios_id: {
        type:DataType.INTENGER,
        primaryKey: true, 
        autoIncrement: true
    },

    nome:DataType.STRING,
    
    vitalidade: {
        type: DataType.INTENGER,
        allownull: false 
    },
    mana: {
        type: DataType.INTENGER,
        allownull: false 
    },
    inteligência: {
        type: DataType.INTENGER,
        allownull: false 
    },
    forca: {
        type: DataType.INTENGER,
        allownull: false 
    },
    
    });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Personagens');
     
  }
};
