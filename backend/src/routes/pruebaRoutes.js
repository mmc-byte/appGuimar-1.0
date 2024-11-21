const express = require('express');
const router = express.Router();
const pruebaController = require('../controllers/pruebaController');

router.get('/usuarios', pruebaController.obtenerUsuarios);


module.exports = router;