const db = require('../database/models');
const posts = db.Posts;
const op = db.Sequelize.Op;

const postController = {
    show: function(req, res){ 
        let id = req.params.id
        let auth = null 
        if(req.session.auth){
            auth = req.session.auth
        } 

        posts.findByPk(id, {
            include: [
                {association: 'users'},
                {association: 'comments'}
            ]
        })
        .then((data)=>{
            res.render('detalleposts', {post: data})
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

    /*list: async function(req,res){
        const search = req.query.search
        let productos = []
        if(search){
            const consulta = {name: {[Op.like]: '%'+search+'%'}}
            productos = await db.products.findAll({
                where: consulta
            })
        } else{
            productos = await db.products.findAll()
        }
        res.render('productList', {productos})
    },*/

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