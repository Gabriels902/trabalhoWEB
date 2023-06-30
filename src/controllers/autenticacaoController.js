const Pessoa = require('../models/pessoa');
const Usuario = require('../models/usuario');

function loginView(req, res){
    pessoa = req.session.pessoa
    res.render("login.html", {pessoa});
}


async function autenticar(req, res) {

    const pessoa = await Pessoa.findOne({ where: { email: req.body.nome, senha: req.body.cpf } });
    if (pessoa !== null) {
      Usuario.email = pessoa.email;
      Usuario.senha = pessoa.senha;
      req.session.autorizado = true;
      req.session.pessoa = pessoa;
      res.redirect('/');
  
      Usuario.findOne({
        where: { pessoaId: pessoa.id },
        attributes: ['email', 'senha']
      }).then((usuario) => {
        if (usuario !== null) {
          console.log(usuario.email); // Acesso ao email do usuário
          console.log(usuario.senha); // Acesso à senha do usuário
        } else {
          console.log('Usuário não encontrado');
        }
      }).catch((error) => {
        console.log(error);
      });
    } else {
      let erro_autenticacao = true;
      res.render('login.html', { erro_autenticacao });
    }
  }

function sair(req, res) {
    req.session.destroy(function(err) {
        console.log('Usuário desautorizado')
     })
     let sucesso_saida = true
     res.render('login.html', {sucesso_saida})
}

function verificarAutenticacao(req, res, next) {
    if (req.session.autorizado){
        console.log('Usuário autorizado')
        next()
    }
    else{
        console.log('Usuário NÃO autorizado')
        res.redirect('/login')
    }
}

module.exports = {
    loginView,
    autenticar,
    verificarAutenticacao,
    sair
  };