const express = require("express");
const router = express.Router();

const municipioController = require('../controllers/municipioController');


router.get('/', municipioController.list);


router.get('/form_registro_persona', (req, res) => {
    res.render('form_registro_persona.ejs');
});

router.get("/", municipioController.list);
router.post("/add", municipioController.register);
router.get("/update/:id", municipioController.edit);
router.post("/update/:id", municipioController.update);
router.get("/delete/:id", municipioController.delete);

module.exports = router;