const express = require('express');
const router = express.Router();

const viviendaController = require('../controllers/viviendaController');
router.get('/', viviendaController.list);
router.post('/add', viviendaController.save);
router.get('/delete/:id', viviendaController.delete)

router.get('/update/:id', viviendaController.edit);
router.post('/update/:id', viviendaController.update);

router.get('/formulario_registro', (req, res) =>{
    res.render("formulario_registro_vivienda");
});

module.exports = router;