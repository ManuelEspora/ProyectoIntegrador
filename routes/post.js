var express = require('express');
const postController = require('../controllers/postController');
var router = express.Router();

router.get('/', postController.show);

router.get('/detallePost', postController.detallePost)

router.get('/agregarpost', postController.create)

router.get('/resultadoBusqueda', postController.resultadoBusqueda)

module.exports = router;