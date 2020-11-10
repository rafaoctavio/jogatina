module.exports = (sequelize,DataType) => {
    const comentario = sequelize.define('comentario', {
        id: {
            type:DataType.INTENGER,
            primaryKey: true, 
            autoIncrement: true,
            unsigned: true,
        },
        
        
        usuarios_id: {
            type:DataType.INTENGER,
            primaryKey: true, 
            autoIncrement: true
        },

               
        postagem_id: {
            type: DataType.INTENGER,
            allownull: false 
        },
        
        conteudo:  {
            type: DataType.STRING,
            allowNull: false,
        },
        
           
    },
    {
        tableName: 'comentario',
        freezeTableName: true, 
        timeStamps: false
    }); 

    comentario.associate = (models) => {
        comentario.belongsTo(models.postagem, {foreignKey: 'id', as: 'postagem'})
    }

    comentario.associate = (models) => {
        comentario.belongsTo(models.usuario, {foreignKey: 'id', as: 'usuario'})
    }
    return comentario;

}
