/*
** No Controlador vão os métodos que vão trabalhar os dados
*/
const database = require('../models')


class PessoaController {
    /*
    **Encontra(READ) e exibe todos os registros da tabela de Pessoas 
    */
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }   
    }

    /*
    **Encontrar(READ) um registro a partir de um parâmetro que entra como um objeto
    **Onde(WHERE) ir no ID buscar esse dado
    */
    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne( 
                { where: { 
                    id: Number(id) 
                }
            })
            return res.status(200).json(umaPessoa)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
    /*
    **Criar(CREATE) uma nova pessoa onde no corpo da requisição(novaPessoa) a informação será passada
    */
    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(201).json(novaPessoaCriada)
        } catch {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController