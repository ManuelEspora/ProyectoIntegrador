var express = require('express');
const postController = require('../controllers/postController');
var router = express.Router();

router.get('/', postController.post);

router.get('/detallePost', postController.detallePost)

router.get('/Agregarpost', postController.agregar)

router.get('/resultadoBusqueda', postController.resultadoBusqueda)

module.exports = router;