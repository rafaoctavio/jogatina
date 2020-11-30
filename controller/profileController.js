const { usuario, postagem } = require('../models');
const ProfileController = {

    home: async (req,res) => {
        const postagens = await postagem.findAll({
            include: "usuario",
            order: [
                ['id', 'DESC'],
            ]
        });
        const user = await usuario.findOne({ where: { id: 4 } });
        const myUser = user.dataValues;
        myUser.senha = undefined;

        console.log(postagens);

        return res.render('profile/home', { myUser, postagens });

    },

    edit: (req, res) => {
        return res.render('profile/edit');
    },
}

module.exports = ProfileController;