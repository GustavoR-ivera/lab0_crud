// en este modulo se define el paquete de rutas asociadas a la entidad persona
const express = require("express");
const router = express.Router();

const personaController = require('../controllers/personaController');

//home page seccion personas
router.get('/', personaController.list);

//registrar persona
router.get('/form_registro_persona', (req, res) => {
    res.render('form_registro_persona.ejs');
});

router.post('/registrar_persona', personaController.register);

//editar persona
router.get('/editar_persona', (req, res) => {
    res.send("editar persona ");
});


module.exports = router;