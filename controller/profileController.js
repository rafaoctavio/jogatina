const ProfileController = {
    home: (req, res) => {
        return res.render('profile/home');
    },

    edit: (req, res) => {
        return res.render('profile/edit');
    },


}

module.exports = ProfileController;