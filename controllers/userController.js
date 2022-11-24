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
    
   login: function(req, res) {
        return res.render('login')
    },
    processLogin: function(req, res){
       let info = req.body;
       let filtro={
           where:[{email:req.body.email}]
       }
       User.findOne(filtro)
       .then((result)=> {
           if(result!=null){
               let passEncriptada= bycript.compareSync(info.password,result.password)
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
    
    store: function(req,res){
        let usuarioAGuardar =req.body;

        let user = {
            email:usuarioAGuardar.email,
            name: usuarioAGuardar.name,
            fecha_de_nacimiento: usuarioAGuardar.fecha_de_nacimiento,
            numero_de_documento: usuarioAGuardar.numero_de_documento,
            password:bycript.hashSync(usuarioAGuardar.password,10)
        }
    
        User.create(user)
        .then((result) => {
            return res.redirect('/users/login')
        })
        .catch((err)=> {
            return console.log(err)
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