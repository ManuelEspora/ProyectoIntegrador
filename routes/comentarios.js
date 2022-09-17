var express = require('express');
const comentariosController = require("../controllers/comentariosController");
var router = express.Router();

router.get('/comentarios', comentariosController.comentarios);

module.exports = router;
