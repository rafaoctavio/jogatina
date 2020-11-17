'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('postagem', {
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allownull: false
    },

    usuarios_id: {
        type:Sequelize.INTEGER,

    },

    post: {
        type: Sequelize.STRING,
        unique:true
    },
    
    visibilidade: {
        type: Sequelize.STRING,
        allownull: false 
    },
    
       
    imagem: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('postagem');

  }
};
