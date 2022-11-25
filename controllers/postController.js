const db = require('../database/models');
const post = db.Posts;
const op = db.Sequelize.Op;

const postController = {
    show: (req, res) => { 
        let id = req.params.id;

        let relaciones = {
            include : [
                {all: true,
                nested: true}
                //{association:'users'},
                //{association:'comments'}
            ]
        };
        post.findbyPk(id, relaciones)
        .then((result)=>{
            return res.render('detallePost', {posts: result})
        })
        .catch((err)=>{
            return res.redirect('/')
        })
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
        post.create(newPost)
        .then( (postCreado) => {
            return res.redirect('/');
        })
        .catch(error => {
            console.log("Error al crear el producto");
        })
          return res.redirect("detallePost");
    },
    resultadoBusqueda: function(req, res){
    res.render('resultadobusqueda', { title:'resultadobusqueda' })
    }
}
module.exports = postController;