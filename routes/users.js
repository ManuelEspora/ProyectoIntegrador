var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.user);

router.get("")

router.get('/login',userController.login);

router.get('/registracion',userController.registracion)

router.get('/miperfil',userController.miPerfil)

router.get('/editarPerfil',userController.editarPerfil)

router.get('/detalleUsuario',userController.detalleUsuario)

module.exports = router;
