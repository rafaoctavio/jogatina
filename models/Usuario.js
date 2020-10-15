const { data } = require("jquery")
const { DATE } = require("sequelize/types")

module.exports = (sequelize,DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id_usuario: {
            type:DataType.INTENGER,
            primaryKey: true, 
            autoIncrement: true
        },
        nome:DataType.STRING,
        email: {
            type: DataType.STRING,
            allowNull: false,
        },
        senha:DataType.STRING
    },{
        tableName: 'usuario', 
        timeStamps: false
    })   

    return

}
