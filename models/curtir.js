module.exports = (sequelize,DataType) => {
    const curtir = sequelize.define('curtir', {
        usuarios_id: {
            type:DataType.INTENGER,
            primaryKey: true, 
            autoIncrement: true
        },

       
        
        postagem_id: {
            type: DataType.INTENGER,
            allownull: false 
        },
        
               
    
    },
    {
        tableName: 'curtir',
        freezeTableName: true,  
        timeStamps: false
    }); 

    curtir.associate = (models) => {
        curtir.belongsTo(models.postagem, {foreignKey: 'id', as: 'postagem'})
    }

    return curtir;

}
