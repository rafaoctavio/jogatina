module.exports = (sequelize,DataType) => {
    const amigos = sequelize.define('amigos', {
        usuarios_id: {
            type:DataType.INTENGER,
            primaryKey: true, 
            autoIncrement: true
        },

       
        
        amigo_id: {
            type: DataType.INTENGER,
            allownull: false 
        },
        
        senha:  {
            type: DataType.STRING,
            allowNull: false,
        },
        
       
    
    },
    {
        tableName: 'amigos', 
        timeStamps: false
    }); 

    return amigos;

}
