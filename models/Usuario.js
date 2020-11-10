module.exports = (sequelize,DataType) => {
    const usuario = sequelize.define('usuario', {
        id: {
            type:DataType.INTENGER,
            primaryKey: true, 
            autoIncrement: true,
            unsigned: true,
        },
        nome: {
            type:DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
        },
        senha:  {
            type: DataType.STRING,
            allowNull: false,
        },
        data_nascimento: {
            type:DataType.DATE,
            allowNull: false
        },
        genero: {
            type:DataType.STRING,
            allowNull: false
        },

        imagem_perfil: {
            type:DataType.DATE,
            allowNull: false
        },
    
    },
    {
        tableName: 'usuario',
        freezeTableName: true, 
        timeStamps: false
    }); 


    usuario.associate = (models) => {
        usuario.hasMany(models.amigos, {foreignKey: 'amigo_id', as: 'amigos'})
    }

    usuario.associate = (models) => {
        usuario.hasMany(models.postagem, {foreignKey: 'id', as: 'postagem'})
    }

    usuario.associate = (models) => {
        usuario.hasMany(models.personagens, {foreignKey: 'id', as: 'personagens'})
    }

    usuario.associate = (models) => {
        usuario.hasMany(models.comentario, {foreignKey: 'id', as: 'comentario'})
    }

    usuario.associate = (models) => {
        usuario.hasMany(models.curtir, {foreignKey: 'id', as: 'curtir'})
    }

    usuario.associate = (models) => {
        usuario.hasMany(models.cometario, {foreignKey: 'id', as: 'comentario'})
    }


    return usuario;

};