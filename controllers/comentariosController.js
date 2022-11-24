const db = require('../database/models');
const comments = db.Comment;

const comentariosController = {
    comments: function(req, res) {
        
        comments.findAll()
            .then((result) => {
                return res.render('index', {comments : result});
            })
            .catch(error => {res.send("Error al conectarse a la base de datos" + error)})
    },
}

module.exports = comentariosController;