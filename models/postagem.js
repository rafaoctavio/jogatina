module.exports = (sequelize,DataType) => {
    const postagem = sequelize.define('postagem', {
        id: {
            type:DataType.INTENGER,
            primaryKey: true, 
            autoIncrement: true,
            allownull: false
        },

        usuarios_id: {
            type:DataType.INTENGER,
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
    },
    {
        tableName: 'postagem',
        freezeTableName: true, 
        timeStamps: false
    }); 

    postagem.associate = (models) => {
        postagem.belongsTo(models.usuario, {foreignKey: 'id', as: 'usuario'})
    }
   
    postagem.associate = (models) => {
        postagem.hasMany(models.curtir, {foreignKey: 'id', as: 'usuario'})
    }

    postagem.associate = (models) => {
        postagem.hasMany(models.comentario, {foreignKey: 'id', as: 'usuario'})
    }



    return postagem;

}
