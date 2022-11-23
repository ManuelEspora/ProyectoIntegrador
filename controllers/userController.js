const db = require('../database/models');
const User = db.User;
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
    
   login: function(req, res){
    if (req.session.user != undefined) {
        return res.redirect('login')
    } else {
        return res.render('login')
    }
    },

    processLogin: async function(req, res){
        const email = req.body.email
        const password = req.body.password

        User = await User.findOne({where:{email:email}})
        .then(function (user){
            if (ser) {
                if(bycript.compareSync(password,user.password_)) {
                    const auth = {id: user.id, name: user.name_, email: user.email}
                    req.session.cookie.maxAge = 3600000;
                    req.session.auth = auth;
                    res.redirect('/')
                }
                else {
                    res.redirect('/users/login')
                }
            } 
            else {
                res.redirect('/users/login')
            }
        })
        .catch(function (error){
            console.log(error)
            res.send("Problema de Conexion")
        })
    },

    profile: function(req, res){
        res.render('miPerfil', {title:'miPerfil'})
        const id = req.params.id

        let relaciones = {
            include : [
                {
                    association: 'comments',
                    include: {
                        association: 'users'
                    }
                },
                {
                    association: 'posts',
                    include: {
                        association: "comments"
                    }
                },
            ]
        }
        User.findByPk(id, relaciones)
        .then( (data) => {
            if (data == null) {
                return res.redirect('/')
            } else {
                return res.render('miPerfil', { users: data })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    
    store: function(req,res){
        let errors = {}
        if(req.body.email === ""){
            errors.message = "El email es obligatorio";
            console.log(errors) 
            return res.render('registracion')
        } else if(req.body.password_ === ""){
            errors.message = "La contraseña es obligatoria";
            console.log(errors) 
            return res.render('registracion')
        } else if(req.body.retypePassword === ""){
            errors.message = "La contraseña es obligatoria";
            console.log(errors) 
            return res.render('registracion')
        }else if(req.password != req.retypePassword){
            errors.message = "Las contraseñas no coinciden";
            console.log(errors) 
            return res.render('registracion')
        }else if (req.file.mimetype != 'image/png' && req.file.mimetype != 'image/jpg' && req.file.mimetype != 'image/jpeg'){
            errors.message = "El archivo debe ser jpg o png";
            console.log(errors) 
            return res.render('registracion')
        }else {
            User.findOne({
                where: {email: req.body.email}
            })
            .then(function(user){
                if(user != null){
                    errors.message = "El email ya esta registrado por favor elija otro";
                    console.log(errors) 
                    return res.render('registracion')
                }else {
                    let newUser = {
                        name_: req.body.nombre,
                        email: req.body.email,
                        password_: bycript.hashSync(req.body.password, 10),
                        avatar: req.file.filename,
                        birth_date: req.body.birth_date,
                        dni: req.body.dni,
                        created_at: new Date(),
                        updated_at: new Date()
                    }

                    User.create(newUser)
                        .then(data => {
                            res.redirect('/')
                        })
                        .catch(e =>{
                            console.log(e)
                            res.send("Error al crear el usuario")
                        })
                }
            })
            .catch(error =>{
                console.log(error)
                res.send("Error al conectar con la base de datos")
            })
        }
    },
    
    logout:(req,res)=>{

        req.session.destroy();
        res.clearCookie('users_id');
        res.locals.user = undefined;
        return res.render('login');
    },
}

module.exports = userController;