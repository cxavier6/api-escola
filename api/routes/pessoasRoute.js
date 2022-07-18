const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router()

/*
** Define as rotas dos métodos desenvolvidos no Controlador
**GET: Pega os dados e exibe como objeto(JSON)
**Os : indica um parâmetro(params do método do Controlador)
**POST: Cria(posta) um novo registro também como JSON
**No POSTMAN esse registro é feito no body>raw(JSON) e POST
*/
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)

module.exports = router;