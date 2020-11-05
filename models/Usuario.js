module.exports = (sequelize,DataType) => {
    const usuario = sequelize.define('usuario', {
        id: {
            type:DataType.INTENGER,
            primaryKey: true, 
            autoIncrement: true,
            unsigned: true,
        },
        nome: {
            type:DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
        },
        senha:  {
            type: DataType.STRING,
            allowNull: false,
        },
        data_nascimento: {
            type:DataType.DATE,
            allowNull: false
        },
        genero: {
            type:DataType.STRING,
            allowNull: false
        },

        imagem_perfil: {
            type:DataType.DATE,
            allowNull: false
        },
    
    },
    {
        tableName: 'usuario',
        freezeTableName: true, 
        timeStamps: false
    }); 

    return usuario;

}
