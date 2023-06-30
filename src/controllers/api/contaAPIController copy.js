const Conta = require('../../models/conta')


function cadastrarConta(req, res){
    let conta = {
        saldo: req.body.nome,
        data_abertura: req.body.nome,
        numero: req.body.nome,
        nome: req.body.nome
    }
    
    Conta.create(conta).then((result)=>{
        res.json({result});
    }).catch((err) => {
        console.log(err)
        res.json({err});
    })
}

module.exports =  {
    cadastrarConta,
};