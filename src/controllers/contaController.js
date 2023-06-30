const Conta = require('../models/conta');

function cadastrarConta(req, res){
    let conta = {
        nome: req.body.nome,
        numero: req.body.numero,
        data_abertura: req.body.data_abertura,
        saldo: req.body.saldo,
    }}

module.exports = {
  cadastrarConta
};
