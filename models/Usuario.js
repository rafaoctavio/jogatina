module.exports = (sequelize,DataType) => {
    const usuario = sequelize.define('usuario', {
        id: {
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
    
        tableName: 'usuario', 
        timeStamps: false
    })   

    return usuario

}
