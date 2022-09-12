const postController = {
    detalle: function(req, res){
        res.render('post', { producto: "un post"})
    },
    Agregar: function(req, res){
        res.render('agregar', { title:'Agregar Post' })
    },
    resultadoBusqueda: function(req,res){
        res.render('resultadoBusqueda', { title:'resultado Busqueda'})
    }
}

module.exports = postController;