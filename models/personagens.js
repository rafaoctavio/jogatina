module.exports = (sequelize,DataType) => {
    const personagens = sequelize.define('personagens', {
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

        nome:DataType.STRING,
        
        vitalidade: {
            type: DataType.INTENGER,
            allownull: false 
        },
        
        senha:  {
            type: DataType.STRING,
            allowNull: false,
        },
        
        data_nascimento: DataType.DATE,

        
        genero: DataType.STRING,

        
        imagem_perfil: DataType.STRING,
    
    },
    {
        tableName: 'personagens',
        freezeTableName: true, 
        timeStamps: false
    }); 

    return personagens;

}
