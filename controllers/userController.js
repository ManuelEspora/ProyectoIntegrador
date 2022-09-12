const userController = {
    user: function(req, res){
        res.render('index', { title:'Usuarios' })
    },
    login: function(req, res){
        res.render('login', {title:'login'})
    },
    perfil: function(req, res){
        res.render('perfil', {title:'perfil'})
    },
    editarPerfil: function(req, res){
        res.render('editarPerfil', {title:'Editar Perfil'})
    },
}

module.exports = userController;