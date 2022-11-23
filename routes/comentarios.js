var express = require('express');
const comentariosController = require("../controllers/comentariosController");
var router = express.Router();

router.get('/comments', comentariosController.comments);

module.exports = router;
