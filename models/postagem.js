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
    },
    {
        tableName: 'postagem',
        freezeTableName: true, 
        timeStamps: false
    }); 

    return postagem;

}
