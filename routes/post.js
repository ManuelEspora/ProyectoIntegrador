const productController = require('../controllers/productController');
var router = express.Router();

router.get("/", function(req, res){
    res.send('')
});

router.get('/detalle', postController.detalle);

router.get('/Agregar', postController.agregar);

router.get('/resultadoBusqueda', postController.resultadoBusqueda)

module.exports = router;