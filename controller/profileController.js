const ProfileController = {
    home: (req, res) => {
        return res.render("/profile/home.ejs");
    }
}

module.exports = ProfileController;