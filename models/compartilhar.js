module.exports = (sequelize,DataType) => {
    const compartilhar = sequelize.define('compartilhar', {
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
        tableName: 'compartilhar',
        freezeTableName: true,  
        timeStamps: false
    }); 
    
    compartilhar.associate = (models) => {
        compartilhar.belongsTo(models.postagem, {foreignKey: 'id', as: 'postagem'})
    }

    return compartilhar;

}
