const Movimento = require('../models/Movimento');
const ContaCorrente = require('../models/ContaCorrente');

function cadastrarMovimentoView(req, res) {
  ContaCorrente.findAll()
    .then((contas) => {
      res.render("conta/movimento.html", { contas });
    })
    .catch((err) => {
      console.log(err);
      res.render("conta/movimento.html", { erro: err });
    });
}

function cadastrarMovimento(req, res) {
  let movimento = {
    contacorrente_id: req.body.contaOrigem,
    tipo: req.body.tipo,
    data_movimento: req.body.data_movimento,
    valor: req.body.valor,
    contacorrente_origem: req.body.contaOrigem,
    contacorrente_destino: req.body.contaDestino,
    observacao: req.body.observacao,
  };

  Movimento.create(movimento)
    .then((movimentoResult) => {
      res.render("conta/movimento.html", { movimento: movimentoResult });
    })
    .catch((err) => {
      console.log(err);
      res.render("conta/movimento.html", { erro: err });
    });
}
//-----------------------------------------//
function depositoView(req, res) {
  res.render("conta/deposito.html", {});
}
async function realizarDeposito(req, res) {
  const valor = req.body.valor;
  const contaDestino = req.body.contaDestino;

  try {

    const conta = await ContaCorrente.findOne({ where: { numero: contaDestino } });
    if (!conta) {
      throw new Error('Conta de destino não encontrada.');
    }

    await Movimento.create({
      contacorrente_id: conta.id,
      tipo: 'C',
      data_movimento: new Date(),
      valor: parseFloat(valor),
      observacao: 'DEPÓSITO'
    });

    res.render("conta/deposito.html", { sucesso: true });
  } catch (err) {
    console.log(err);
    res.render("conta/deposito.html", { erro: err.message });
  }
}
module.exports = {
  cadastrarMovimentoView,
  cadastrarMovimento,
  depositoView,
  realizarDeposito,
};