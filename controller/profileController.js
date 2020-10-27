const ProfileController = {
    home: (req, res) => {
        return res.render('profile/home');
    },

    editar: (req, res) => {
        return res.render('profile/edit');
    },

}

module.exports = ProfileController;