module.exports = (sequelize,DataType) => {
    const compartilhar = sequelize.define('compartilhar', {
        usuarios_id: {
            type:DataType.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },

        
        postagem_id: {
            type: DataType.INTEGER,
            allownull: false 
        },
    
    },
    {
        tableName: 'compartilhar',
        freezeTableName: true,  
        timeStamps: false
    }); 
    
    compartilhar.associate = ({postagem}) => {
        compartilhar.belongsTo(postagem, {foreignKey: 'id', as: 'postagem'})
    }

    return compartilhar;

}
