// en este modulo se define el paquete de rutas asociadas a la entidad persona
const express = require("express");
const router = express.Router();


//home page seccion personas
router.get('/', (req, res) => {
    res.send("seccion personas");
});

//registrar persona
router.get('/registrar_persona', (req, res) => {
    res.send("registro de persona ");
});

//editar persona
router.get('/editar_persona', (req, res) => {
    res.send("editar persona ");
});


module.exports = router;