module.exports = (sequelize,DataType) => {
    const personagem = sequelize.define('personagem', {
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
        email: {
            type: DataType.STRING,
            allowNull: false,
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
        tableName: 'usuario', 
        timeStamps: false
    }); 

    return personagem;

}
