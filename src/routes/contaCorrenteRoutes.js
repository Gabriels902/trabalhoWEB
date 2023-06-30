const express = require('express');
const router = express.Router();
const contaCorrenteController = require('../controllers/contaCorrenteController');

router.get('/conta/cadastrarConta', contaCorrenteController.cadastrarConta);
router.get('/conta/cadastrarView', contaCorrenteController.cadastrarView);
router.get('/conta/consultarSaldo', contaCorrenteController.consultarSaldo);
router.get('/conta/consultarSaldo', contaCorrenteController.consultarSaldoView);

module.exports = router;
