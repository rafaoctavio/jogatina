'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('postagem', {
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

    post: {
        type: DataType.STRING,
        unique:true
    },
    
    visibilidade: {
        type: DataType.STRING,
        allownull: false 
    },
    
       
    imagem: {
        type: DataType.STRING,
        allowNull: false,
    },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('postagem');

  }
};
