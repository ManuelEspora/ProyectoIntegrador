const db = require('../database/models');
const User = db.User;
const bycript = require('bcryptjs');
const op = db.Sequelize.Op;

const userController = {
    create : (req, res) =>{
        return res.render("registerUser");
    },
    login:(req,res)=>{
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('login')
        }
        
    },
    processlogin: function(req, res){
        res.redirect('/')
    },
    store: (req, res) => {
            let errors = {};
    
            if (req.body.name == "") {
                errors.message = "El campo nombre esta vacio";
                res.locals.errors = errors;
                return res.render('registracion');
    
            }else if(req.body.email == ""){
                errors.message = "El campo email esta vacio";
                res.locals.errors = errors;
                return res.render('registracion');
            } else {
    
                let usuarioAGuardar = req.body;
                let imgPefil = req.file.filename;
                let user ={
                    name:usuarioAGuardar.name,
                    email:usuarioAGuardar.email,
                    password:bycript.hashSync(usuarioAGuardar.password,10),
                    img : imgPefil
                }
                User.create(user)
                .then((result)=>{
                    return res.redirect('/users/login')
                })
                .catch((err)=>{
                    return console.log(err)
                })
            }
    },
    logout:(req,res)=>{
        req.session.destroy();
        res.clearCookie('users_id');
        res.locals.user = undefined;
        return res.render('login');
    },
    /*registracion: function(req, res){
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
    },*/
}

module.exports = userController;