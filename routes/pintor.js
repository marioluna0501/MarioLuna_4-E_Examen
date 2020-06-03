const express = require('express');
// va a rutear los pintores
let pintor = require('../controllers/PintoresController.js');
// se crean las rutas
let router = express.Router();
router.get('/',pintor.list);
module.exports = router;

