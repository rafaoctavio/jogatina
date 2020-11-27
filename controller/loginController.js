const {usuario}=require('./../models')
const LoginController = {

    index: (req, res) => {
        return res.render("login");
    },
    doLogin:async (req, res) => {
        const {username,password,remember}=req.body
        const user=  await usuario.findOne({where:{email:username}})
console.log (req.body)
    }
}

module.exports = LoginController;