var express = require('express');
const postController = require('../controllers/postController');
var router = express.Router();


router.get('/detallePost', postController.show);

router.get('/agregarpost', postController.create);
router.post('/agregarpost', postController.store);

router.get('/resultadoBusqueda', postController.resultadoBusqueda)

module.exports = router;