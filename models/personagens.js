module.exports = (sequelize, DataType) => {
    const personagens = sequelize.define('personagens', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: false
        },

        usuarios_id: {
            type: DataType.INTEGER,
            autoIncrement: false
        },

        nome: DataType.STRING,

        vitalidade: {
            type: DataType.INTEGER,
            allownull: false
        },
        mana: {
            type: DataType.INTEGER,
            allownull: false
        },
        inteligência: {
            type: DataType.INTEGER,
            allownull: false
        },
        forca: {
            type: DataType.INTEGER,
            allownull: false
        },


    }, {
        tableName: 'personagens',
        freezeTableName: true,
        timeStamps: false
    });

    personagens.associate = ({usuario}) => {
        personagens.belongsTo(usuario, {
            foreignKey: 'id',
            as: 'usuario'
        })
    }

    return personagens;

}
