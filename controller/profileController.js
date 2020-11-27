const {usuario, postagem} = require('../models');
const ProfileController = {
  
    home: async (req,res) => {
        // const postagem = await postagem.findAll({
        //     include: "usuario",
        //     order: [
        //         ['id', 'DESC'],
        //     ]
        // });
        // res.render('profile/home', { postagem });
        const user = await usuario.findAll();
        const result = await user.toJSON();
        console.log(result);
        return res.render('profile/home', {result});
        
    },
        
    
    
     edit: (req, res) => {
        return res.render('profile/edit');
    },

    

}

module.exports = ProfileController;