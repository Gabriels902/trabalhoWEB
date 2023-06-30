

function cadastrarPessoa(req, res){
    let pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso,
        endereco: req.body.endereco,
        cep: req.body.cep,
        data_nascimento: req.body.data_nascimento
    }
    
    Pessoa.create(pessoa).then((result)=>{
        res.json({result});
    }).catch((err) => {
        console.log(err)
        res.json({err});
    })
}

module.exports =  {
    cadastrarPessoa,
};