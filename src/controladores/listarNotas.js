const { query } = require("../banco de dados/conexao");

const listarNotas = async (req, res) => {
    try {
        const pagina = req.query.pagina ? parseInt(req.query.pagina) : 1;
        const tamanhoPagina = 10;
        const offset = (pagina - 1) * tamanhoPagina;

        const notas = await query('select * from notas order by id limit $1 offset $2', [tamanhoPagina, offset]);

        return res.json({
            notas: notas.rows,
            pagina_atual: pagina,
            total_notas: notas.rowCount
        });
    } catch (error) {
        return res.status(500).json({ mensagem: `Erro interno: ${error.message}` });
    }
};

module.exports = {
    listarNotas
};