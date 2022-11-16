const db = require('../database/models');
const posts = db.Posts;
const op = db.Sequelize.Op;

const postController = {
    index : function(req, res) {

        let criterios = {
           where : [{awards : 1}, {length : 2}],
            order : [["img_url"]],
            limit : 10
        }

        posts.findAll(criterios)
        .then((result) => {
            /* #nota: Crear Contador */


             /* #nota: Enviar dato a la vista con la clave contador*/


            return res.render("movies", {peliculas : result})
        });
    
},
    show: function(req, res){ 
        let id = req.params.id
        let auth = null 
        if(req.session.auth){
            auth = req.session.auth
        } 

        posts.findByPk(id, {
            include: [
                {association: 'postsUsers'},
                {association: 'postComments'}
            ]
        })
        .then((data)=>{
            res.render('detalleposts', {posts: data})
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    detallePost: function(req, res){
        res.render('detallePost', { title: "un post"})
    },
    create: function(req, res){
        return res.render('agregarpost', { title:'Agregar Post' })
    },
    store: (req, res) => {
          let postsAGuardar = req.body;
          let newPost = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            url_img: req.body.url_img,
            users_id: req.body.users_id,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        posts.create(newPost)
        .then( (postCreado) => {
            return res.redirect('/');
        })
        .catch(error => {
            console.log("Error al crear el producto");
        })
          return res.redirect("/detallePost");
    },
    resultadoBusqueda: function(req, res){
    res.render('resultadobusqueda', { title:'resultadobusqueda' })
    }
}
module.exports = postController;