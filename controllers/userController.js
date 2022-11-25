const db = require('../database/models');
const User = db.Users;
const bycript = require('bcryptjs');
const op = db.Sequelize.Op;

const userController = {
    user: function(req, res){
        User.findAll()
        .then((result) => {
            return res.render('index', {users : result});
        })
        .catch(error => {res.send("Error al conectarse a la base de datos" + error)})
    },
    
    register: function(req, res){
        res.render('registracion', {title:"Registracion"})  
    },

    store: function(req,res){
        let usuarioAGuardar =req.body;

        let foto = req.file;

        let user = {
            email:usuarioAGuardar.email,
            password_:bycript.hashSync(usuarioAGuardar.pass,10),
            name: usuarioAGuardar.name,
            birth_date: usuarioAGuardar.fecha_de_nacimiento,
            dni: usuarioAGuardar.numero_de_documento,
            avatar: "foto.png"
        }
    
        User.create(user)
        .then((result) => {
            return res.redirect('/users/login')
        })
        .catch((err)=> {
            return console.log(err)
        })
    },
    
   login: function(req, res) {
        return res.render('login')
    },
    processLogin: function(req, res){
       let info = req.body;
       let filtro={
           where:[{email:info.email}]
       }
       User.findOne(filtro)
       .then((result)=> {
           if(result!=null){
               let passEncriptada= bycript.compareSync(info.pass,result.pass)
               if(passEncriptada){
                   return res.redirect('/')
               }else{
                   return res.send('La clave no coincide')
               }
            }
        })

       .catch(error => console.log(error))
       
    },
    profile: function(req, res){
        res.render('detalleUsuario', {title:'detalleUsuario'})
        const id = req.params.id

        let relaciones = {
            include : [
                {all: true,
                nested: true}
            ]
        }
        User.findByPk(id, relaciones)
        .then( (users) => {
            if (users == null) {
                return res.redirect('/')
            } else {
                return res.render('detalleusuario', { users: data })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    miPerfil: function(req, res){
        res.render('miPerfil', {title:'miPerfil'})
        const id = req.params.id

        let relaciones = {
            include : [
                {all: true,
                nested: true}
            ]
        }
        User.findByPk(id, relaciones)
        .then( (users) => {
            if (users == null) {
                return res.redirect('/')
            } else {
                return res.render('miPerfil', { users: data })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    },  
    logout:(req,res)=>{

        req.session.destroy();
        res.clearCookie('users_id');
        res.locals.user = undefined;
        return res.render('login');
    },
}

module.exports = userController;