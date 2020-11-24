module.exports = (sequelize,DataType) => {
    const amigos = sequelize.define('amigos', {
        usuarios_id: {
            type:DataType.INTEGER,
            primaryKey: true, 
            autoIncrement: false
        },

        amigo_id: {
            type: DataType.INTEGER,
            allownull: false
        },

    },
    {
        tableName: 'amigos', 
        timeStamps: false
    }); 

    amigos.associate = ({usuario}) => {
        amigos.belongsTo(usuario, {foreignKey: 'id', as: 'usuario'})
    }

    return amigos;

}
