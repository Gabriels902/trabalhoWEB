const express = require('express');
const router = express.Router();

const movimentoAPIController = require('../../controllers/api/movimentoAPIController');

router.post('/api/conta/movimento', movimentoController.realizarMovimento);


module.exports = router;