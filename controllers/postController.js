const db = require('../database/models');

const postController = {
    post: function(req, res){
        res.render('index', { title:'Post' })
    },
    detallePost: function(req, res){
        res.render('detallePost', { title: "un post"})
    },
    agregar: function(req, res){
        res.render('agregarpost', { title:'Agregar Post' })
    },
    resultadoBusqueda: function(req,res){
        res.render('resultadoBusqueda', { title:'resultado Busqueda'})
    }
}

module.exports = postController;