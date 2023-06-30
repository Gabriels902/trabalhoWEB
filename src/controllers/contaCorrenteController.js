const ContaCorrente = require('../models/ContaCorrente');

function cadastrarView(req, res) {
  res.render("conta/cadastrarConta.html", {});
}

function cadastrarConta(req, res) {
  let contaCorrente = {
    nome: req.body.nome,
    numero: req.body.numero,
    data_abertura: req.body.data_abertura,
    saldo: req.body.saldo,

  };

  ContaCorrente.create(contaCorrente)
    .then((contaResult) => {
      res.render("conta/cadastrarConta.html", { conta: contaResult });
    })
    .catch((err) => {
      console.log(err);
      res.render("conta/cadastrarConta.html", { erro: err });
    });
}

function consultarSaldoView(req, res) {
  res.render("conta/consultarSaldo.html", {});
}

function consultarSaldo(req, res) {

  const numeroConta = req.body.numeroConta;


  ContaCorrente.findOne({ where: { numero: numeroConta } })
    .then((conta) => {
      if (conta) {
        res.render("conta/consultarSaldo.html", { conta });
      } else {
        res.render("conta/consultarSaldo.html", { erro: "Conta não encontrada" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.render("conta/consultarSaldo.html", { erro: err });
    });
}

module.exports = {
  cadastrarView,
  cadastrarConta,
  consultarSaldoView,
  consultarSaldo,
};