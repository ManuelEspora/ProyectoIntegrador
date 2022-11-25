const db = require('./../database/models/index')
const posts = db.Posts;
const indexController = {
    index: function(req, res){
        posts.findAll( {
            include : [
                {association: 'users'},
                {association: 'comments'}
            ],

        })
        .then((result) => {
            return res.render('index', {posts : result,});
        })
        .catch(error => {res.send("Error al conectarse a la base de datos" + error)})
        },

    }
module.exports = indexController;
