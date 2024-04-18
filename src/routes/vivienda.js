const express = require('express');
const router = express.Router();

const viviendaController = require('../controllers/viviendaController');
router.get('/', viviendaController.list);
router.post('/add', viviendaController.save);
router.get('/delete/:id', viviendaController.delete)

module.exports = router;