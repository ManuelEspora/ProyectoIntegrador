const userController = {
    user: function(req, res){
        res.render('index', { title:'Usuarios' })
    },
    login: function(req, res){
        res.render('login', {title:'login'})
    },
    perfil: function(req, res){
        res.render('profile', {title:'profile'})
    },
    editarPerfil: function(req, res){
        res.render('editProfile', {title:'Edit Profile'})
    },
}

module.exports = userController;