const db = require('../database/models');
const comments = db.comments;

const comentariosController = {
    comments: function(req, res){
        let auth = null 
        if(req.session.auth){
            auth = req.session.auth
        }
        
        comments.findAll()
            .then((result) => {
                return res.render('index', {comments : result});
            })
            .catch(error => {res.send("Error al conectarse a la base de datos" + error)})
    },
}

module.exports = comentariosController;