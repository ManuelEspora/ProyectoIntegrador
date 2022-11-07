const userController = {
    user: function(req, res){
        res.render('index', { title:'Usuarios' })
    },
    login: function(req, res){
        res.render('login', {title:'login'})
    },


    registracion: function(req, res){
        res.render('registracion', {title:"Register"})  
    },
    miPerfil: function(req, res){
        res.render('miperfil', {title:'perfil'})
    },
    editarPerfil: function(req, res){
        res.render('editarPerfil', {title:'Editar Perfil'})
    },
    detalleUsuario: function(req, res){
        res.render('detalleUsuario', {title:'Detalles Usuario'})
    },
}

module.exports = userController;