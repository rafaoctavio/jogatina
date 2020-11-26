const bcrypt = require('bcrypt');
const {usuario} = require ('../models');
const CadastroController = {
    index: (req, res) => {
        return res.render('cadastro');
    },
      
    
    criar: async (req, res) => {
        const {nome, email, data_nascimento, genero, senha} = req.body;
        const {filename} = req.file;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(senha, salt);
        const data = new Date(`${data_nascimento[2]}-${data_nascimento[1]}-${data_nascimento[0]}`);
        console.log(req.body)
        const result = await usuario.create({nome, email, data_nascimento:data, genero, senha:hash, imagem_perfil:filename});
        return res.redirect('/profile/');
    }
}

module.exports = CadastroController;