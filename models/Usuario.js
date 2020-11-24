module.exports = (sequelize,DataType) => {
    const usuario = sequelize.define('usuario', {
        id: {
            type:DataType.INTEGER,
            primaryKey: true, 
            // autoIncrement: true,

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
            type:DataType.STRING,
            allowNull: false
        },
    
    },
    {
        tableName: 'usuario',
        freezeTableName: true, 
        timeStamps: false
    }); 


    usuario.associate = (models) => {
        usuario.hasMany(models.amigos, {foreignKey: 'amigo_id', as: 'amigos'});

        usuario.hasMany(models.postagem, {foreignKey: 'id', as: 'postagem'});

        usuario.hasMany(models.personagens, {foreignKey: 'id', as: 'personagens'});

        usuario.hasMany(models.comentario, {foreignKey: 'id', as: 'comentario'});

        usuario.hasMany(models.curtir, {foreignKey: 'id', as: 'curtir'});

        usuario.hasMany(models.compartilhar, {foreignKey: 'id', as: 'compartilhar'});

    }

    return usuario;

};