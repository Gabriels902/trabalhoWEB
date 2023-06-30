const Conta = require('../../models/conta')


function cadastrarConta(req, res){
    let conta = {

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