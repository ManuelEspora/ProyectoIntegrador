const db = require('./../database/models/index')
const post = db.Post;
const indexController = {
    index: function(req, res){
        let auth = null 
        if(req.session.auth){
            auth = req.session.auth
        }

        post.findAll()
            .then((result) => {
                return res.render('index', {post : result});
            })
            .catch(error => {res.send("Error al conectarse a la base de datos" + error)})
        }
}
module.exports = indexController;
