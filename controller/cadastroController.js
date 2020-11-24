const {usuario} = require ('../models')
const CadastroController = {
    index: (req, res) => {
        return res.render('cadastro');
    },
      
    
    criar: async (req, res) => {
        const dados = req.body;
        const result = await usuario.create(dados);
        return res.redirect('/profile/');
    }
}

module.exports = CadastroController;