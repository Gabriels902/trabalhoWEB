const express = require('express');
const router = express.Router();
const movimentoController = require('../controllers/movimentoController');

router.get('/conta/movimento', movimentoController.cadastrarMovimentoView);
router.post('/conta/movimento', movimentoController.cadastrarMovimento);
router.get('/conta/deposito', movimentoController.depositoView);
router.post('/conta/deposito', movimentoController.realizarDeposito);

module.exports = router;
