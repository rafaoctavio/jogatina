const PersonagemController = {
    criar: (req, res) => {
        return res.render('personagem/criar');
    },

    edit: (req, res) => {
        return res.render('personagem/edit');
    },


}

module.exports = PersonagemController;