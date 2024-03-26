const { query } = require('../banco de dados/conexao')

const excluirNota = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    try {
        const nota = await query('select * from notas where usuario_id = $1 and id = $2', [usuario.id, id]);
        if (nota.rowCount <= 0) {
            return res.status(404).json({ mensagem: 'A nota não existe' });
        }

        const notaExcluida = await query('delete from notas where usuario_id = $1 and id = $2', [usuario.id, id]);

        if (notaExcluida.rowCount <= 0) {
            return res.status(500).json({ mensagem: `Erro interno: ${error.message}` });
        }

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ mensagem: `Erro interno: ${error.message}` });
    }
}

module.exports = {
    excluirNota
}
