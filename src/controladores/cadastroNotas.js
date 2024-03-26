const { query } = require('../banco de dados/conexao');

const cadastrarNota = async (req, res) => {
    const { usuario } = req;
    const { numero_nota, descricao } = req.body;

    if (!numero_nota || !descricao) {
        return res.status(400).json({ mensage: 'Todos os campos são obrigatorios' })
    }

    try {

        const queryCadastro = 'insert into notas (numero_nota, descricao,usuario_id) values ($1,$2,$3) returning *';
        const paramCadastro = [numero_nota, descricao, usuario.id];
        const { rowCount, rows } = await query(queryCadastro, paramCadastro);

        if (rowCount <= 0) {
            return res.status(500).json({ mensagem: 'parou aqui' })
        }

        const [nota] = rows;

        return res.status(201).json(nota);

    } catch (error) {
        return res.status(500).json({ mensagem: `Erro interno: ${error.message}` })
    }


}

module.exports = {
    cadastrarNota
}; 
