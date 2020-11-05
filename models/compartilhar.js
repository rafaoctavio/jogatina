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

    return compartilhar;

}
