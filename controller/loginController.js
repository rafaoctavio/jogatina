const { usuario } = require('./../models');
const bcrypt = require('bcrypt');

const LoginController = {

    index: (req, res) => {
        return res.render("login");
    },
    doLogin: async (req, res) => {
        const { username, password, remember } = req.body
        const user = await usuario.findOne({ where: { email: username } });
        const salt = bcrypt.genSaltSync(10);

        if(!user) {
            return res.status(401).render('cadastro');
        }
        const senhaValida = bcrypt.compareSync(password, user.senha);

        if(senhaValida) {
            req.userId = user.id;
            return res.redirect('/profile');
        }
        return res.status(401).render('cadastro');
    }
}

module.exports = LoginController;