const express = require('express');
const router = express.Router();

const contaAPIController = require('../../controllers/api/contaAPIController');

router.post('/api/conta/cadastrar', contaAPIController.cadastrarConta);


module.exports = router;