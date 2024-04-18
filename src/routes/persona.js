// en este modulo se define el paquete de rutas asociadas a la entidad persona
const express = require("express");
const router = express.Router();

const personaController = require('../controllers/personaController');

//home page seccion personas
router.get('/', personaController.list);

//redireccion a form de registro de persona
router.get('/form_registro_persona', (req, res) => {
    res.render('form_registro_persona.ejs');
});

//registrar persona
router.post('/registrar_persona', personaController.register);

//editar persona -> renderizar form de edicion de persona
router.get('/form_edicion_persona/:id', personaController.edit);

//actualizar persona -> ejecuta consulta de actualizacion en bd 
router.post('/actualizar_persona/:id', personaController.update);

//eliminar persona
router.get('/eliminar_persona/:id', personaController.delete);


module.exports = router;