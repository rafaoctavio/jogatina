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

    amigos.associate = (models) => {
        amigos.belongsTo(models.usuario, {foreignKey: 'id', as: 'usuario'})
    }

    return amigos;

}
