const Pessoa = require('../models/pessoa')
const Usuario = require('../models/usuario')

function cadastrarView(req, res){
    res.render("pessoa/cadastrar.html", {});
}

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
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
    }
    Pessoa.create(pessoa).then((pessoaResult) => {
        usuario.id = pessoa.id; 
        Usuario.create(usuario).then((usuarioResult) => {
            res.render("pessoa/cadastrar.html", { pessoa: pessoaResult, usuario: usuarioResult });
        }).catch((usuarioErr) => {
            console.log(usuarioErr);
            res.render("pessoa/cadastrar.html", { erro: usuarioErr });
        });
    }).catch((pessoaErr) => {
        console.log(pessoaErr);
        res.render("pessoa/cadastrar.html", { erro: pessoaErr });
    });
}


function listarView(req, res){

    let sucesso_excluir = req.query.sucesso_excluir
    let erro_excluir = req.query.erro_excluir
    

    Pessoa.findAll().then((pessoas)=>{
        res.render("pessoa/listar.html", {pessoas, sucesso_excluir, erro_excluir});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/listar.html", {erro});
    })
}

function editarView(req, res){
    let id = req.params.id
    let pessoa;
    Pessoa.findByPk(id).then(function(pessoa){
        res.render("pessoa/editar.html", {pessoa});
    })
}

function editarPessoa(req, res) {
    let pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso
    }
    Pessoa.update(
      pessoa,
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.render("pessoa/editar.html", {pessoa, sucesso});
    })
    .catch(function (erro) {
        res.render("pessoa/editar.html", {pessoa, erro})
    });

}

function excluirPessoa(req, res) {
   
    Pessoa.destroy(
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.redirect("/pessoa/listar?sucesso_excluir=1");
    })
    .catch(function (erro) {
        res.redirect("/pessoa/listar?erro_excluir=1")
    });

}

module.exports =  {
    cadastrarView,
    cadastrarPessoa,
    listarView,
    editarView,
    editarPessoa,
    excluirPessoa,
};