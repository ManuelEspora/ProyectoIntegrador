const db = require('./../database/models/index')
const indexController = {
    index: function(req, res){
        let auth = null 
        if(req.session.auth){
            auth = req.session.auth
        }
        
        db.Posts.findAll()
            .then(users => {
                res.render('index', {title:'Express', auth, users});
            }) 
            .catch(error => {res.send("Errror al conectarse a la base de datos" + error)})

        }
}
module.exports = indexController;
