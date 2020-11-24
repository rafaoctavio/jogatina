module.exports = (sequelize,DataType) => {
    const postagem = sequelize.define('postagem', {
        id: {
            type:DataType.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
            allownull: false
        },

        usuarios_id: {
            type:DataType.INTEGER,
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

    postagem.associate = ({usuario, curtir, comentario}) => {
        postagem.belongsTo(usuario, {foreignKey: 'id', as: 'usuario'});

        postagem.hasMany(curtir, {foreignKey: 'id', as: 'usuario'});

        postagem.hasMany(comentario, {foreignKey: 'id', as: 'usuario'});
    }
   
    
    return postagem;

}
