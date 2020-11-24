module.exports = (sequelize,DataType) => {
    const comentario = sequelize.define('comentario', {
        id: {
            type:DataType.INTEGER,
            primaryKey: true, 
            // autoIncrement: true,
            unsigned: true,
        },
        
        
        usuarios_id: {
            type:DataType.INTEGER,
            // autoIncrement: true
        },

               
        postagem_id: {
            type: DataType.INTEGER,
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

    comentario.associate = ({postagem,usuario}) => {
        comentario.belongsTo(postagem, {foreignKey: 'id', as: 'postagem'});

        comentario.belongsTo(usuario, {foreignKey: 'id', as: 'usuario'});
    }

    return comentario;

}
