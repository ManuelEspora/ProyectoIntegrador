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
router.get('/', userController.user);

router.get('/registracion', userController.register);
router.post('/registracion', upload.single('fotodeperfil'), userController.store);

router.get('/login',userController.login);
router.post('/login',userController.processLogin)

router.get('/detalleUsuario',userController.profile)
router.get('/miPerfil',userController.miPerfil)

router.post('/logout',userController.logout);
module.exports = router;
