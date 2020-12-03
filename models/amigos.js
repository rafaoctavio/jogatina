module.exports = (sequelize,DataType) => {
    const amigos = sequelize.define('amigos', {
        id: {
            type:DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
        usuarios_id: {
            type:DataType.INTEGER,
            autoIncrement: false
        },

        amigo_id: {
            type: DataType.INTEGER,
            allownull: false
        },

    },
    {
        tableName: 'amigos', 
        timestamps: false
        
    }); 
    
    amigos.associate = ({usuario}) => {
        amigos.belongsToMany(usuario, {through: 'amigos', foreignKey: 'id', as: 'usuario'})
    }

    return amigos;

}
