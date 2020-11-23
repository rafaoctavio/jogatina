const {usuario} = require ('../models')
const CadastroController = {
    criar: async (req, res) => {
        const dados = req.body;
        const result = await Usuario.create(dados);
        return res.redirect('/profile/');
    }
 
}

module.exports = CadastroController;