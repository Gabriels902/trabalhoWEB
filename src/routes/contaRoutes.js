const express = require('express');
const router = express.Router();

const contaController = require('../controllers/contaController');


                  
router.post('/conta/cadastrar', contaController.cadastrarConta);



module.exports = router;