module.exports = (sequelize,DataType) => {
    const curtir = sequelize.define('curtir', {
        usuarios_id: {
            type:DataType.INTEGER,
            primaryKey: true, 
            // autoIncrement: true
        },

       
        
        postagem_id: {
            type: DataType.INTEGER,
            allownull: false 
        },
        
               
    
    },
    {
        tableName: 'curtir',
        freezeTableName: true,  
        timeStamps: false
    }); 

    curtir.associate = ({postagem}) => {
        curtir.belongsTo(postagem, {foreignKey: 'id', as: 'postagem'})
    }

    return curtir;

}
