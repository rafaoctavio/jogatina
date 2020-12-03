const { amigos, usuario } = require('../models');
const AmigosController = {

        index: async (req, res) => {
        const user = await usuario.findOne({ where: { id: 4 }, include: "amigo" });
        const myUser = user.dataValues;
        myUser.senha = undefined;
        
        const rolezao = user.toJSON().amigo[0].usuarios_id
        let myAmigos = await amigos.findAll({where: {usuarios_id:rolezao}, include: "usuario"})

        // console.log(user.toJSON().amigo);
        console.log(rolezao);
        return res.render("amigos", {myUser});
    }
}

module.exports = AmigosController;
