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
            autoIncrement: false
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
            allowNull: true,
        },
    },
    {
        tableName: 'postagem',
        freezeTableName: true, 
        timestamps: false
    }); 

    postagem.associate = ({usuario, curtir, comentario}) => {
        postagem.belongsTo(usuario, {foreignKey: 'id', as: 'usuario'});

        postagem.hasMany(curtir, {foreignKey: 'id', as: 'curtidas'});

        postagem.hasMany(comentario, {foreignKey: 'id', as: 'comentarios'});
    }
   
    
    return postagem;

}
