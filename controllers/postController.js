const db = require('../database/models');
const posts = db.Posts;
const op = db.Sequelize.Op;

const postController = {
    show: function(req, res){
        res.render('index', { title:'Post' })
    },
    detallePost: function(req, res){
        res.render('detallePost', { title: "un post"})
    },
    create: function(req, res){
        return res.render('agregarpost', { title:'Agregar Post' })
    },
    resultadoBusqueda: function(req, res){
    res.render('resultadobusqueda', { title:'resultadobusqueda' })
    }
}
module.exports = postController;