const { query } = require("../banco de dados/conexao");

const atualizarNota = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { numero_nota, descricao } = req.body;

    if (!numero_nota || !descricao) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    try {
        const nota = await query('select * from notas where usuario_id = $1 and id = $2', [usuario.id, id]);
        if (nota.rowCount <= 0) {
            return res.status(404).json({ mensagem: 'A nota não existe' });
        }

        const queryAtualizacao = 'update notas set numero_nota = $1, descricao = $2 where id = $3';
        const paramAtualizacao = [numero_nota, descricao, id];
        const notaAtualizada = await query(queryAtualizacao, paramAtualizacao);

        if (notaAtualizada.rowCount <= 0) {
            return res.status(500).json({ mensagem: 'Erro interno: Não foi possível atualizar a nota' });
        }

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ mensagem: `Erro interno: ${error.message}` });
    }
};

module.exports = {
    atualizarNota
};

