var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.user);

router.get("")

router.get('/login',userController.login);

router.get('/editarPerfil',userController.editarPerfil)

router.get('/perfil',userController.perfil)

module.exports = router;
