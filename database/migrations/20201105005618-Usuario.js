'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('usuario', {
  id: {
      type:Sequelize.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
      unsigned: true,
  },
  nome: {
      type:Sequelize.STRING,
      allowNull: false,
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  senha:  {
      type: Sequelize.STRING,
      allowNull: false,
  },
  data_nascimento: {
      type:Sequelize.DATEONLY,
      allowNull: false
  },
  genero: {
      type:Sequelize.STRING,
      allowNull: false
  },

  imagem_perfil: {
      type:Sequelize.STRING,
      allowNull: false
  }, });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable('usuario');
     
  }
};
