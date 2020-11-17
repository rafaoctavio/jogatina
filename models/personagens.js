module.exports = (sequelize, DataType) => {
    const personagens = sequelize.define('personagens', {
        id: {
            type: DataType.INTENGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: false
        },

        usuarios_id: {
            type: DataType.INTENGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: DataType.STRING,

        vitalidade: {
            type: DataType.INTENGER,
            allownull: false
        },
        mana: {
            type: DataType.INTENGER,
            allownull: false
        },
        inteligência: {
            type: DataType.INTENGER,
            allownull: false
        },
        forca: {
            type: DataType.INTENGER,
            allownull: false
        },


    }, {
        tableName: 'personagens',
        freezeTableName: true,
        timeStamps: false
    });

    personagens.associate = (models) => {
        personagens.belongsTo(models.usuario, {
            foreignKey: 'id',
            as: 'usuario'
        })
    }

    return personagens;

}
