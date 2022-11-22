var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usuarios'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));            
    }
});

let upload = multer({storage: storage});

/* GET users listing. */
router.get('/register', userController.create);

router.get('/login',userController.login);
router.get('/login', userController.processlogin);

/*router.get('/registracion',userController.registracion)

router.get('/miperfil',userController.miPerfil)

router.get('/editarPerfil',userController.editarPerfil)

router.get('/detalleUsuario',userController.detalleUsuario)
*/
router.get('/logout',userController.logout);
module.exports = router;
