const ProfileController = {
  
    home: async (req,res) => {
        const posts = await Post.findAll({
            include: "usuario",
            order: [
                ['id', 'DESC'],
            ]
        });
        res.render('profile/home', { posts });
    },
    
     edit: (req, res) => {
        return res.render('profile/edit');
    },

    

}

module.exports = ProfileController;