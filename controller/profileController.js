const { usuario, postagem, amigos } = require('../models');
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

    edit: async (req, res) => {
        const { id } = req.params;
        // const user = await usuario.findByPk(id);
        const user = await usuario.findOne({ where: { id: 4 } });
        const myUser = user.dataValues;
        return res.render('profile/edit', { myUser });
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;
        // const result = await usuario.update(dados, { where: { id } });
        const user = await usuario.findOne({ where: { id: 4 } });
        const myUser = user.dataValues;
        return res.redirect('/profile/');
    },

    deletar: async (req, res) => {
        const { id } =req.params;
        const result = await usuario.destroy({ where:{ id } });
        const myUser = user.dataValues;
        return res.redirect('/profile/');
    },

    seguir: async (req, res) => {
        const { id } = req.params;
        const adicionar = await amigos.create({usuarios_id:4, amigo_id: id})
        return res.redirect('/amigos');
    }

};

module.exports = ProfileController;