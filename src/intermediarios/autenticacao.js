const { query } = require('../banco de dados/conexao');
const jwt = require('jsonwebtoken');

const filtroAutenticacao = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensage: 'Não Autorizado' })
    }

    try {


        const token = authorization.replace("Bearer ", "").trim();

        const { id } = jwt.verify(token, 'senhaSeguraParaToken');

        const { rowCount, rows } = await query('select * from usuarios where id = $1', [id]);
        if (rowCount <= 0) {
            return res.status(401).json({ mensage: 'Não Autorizado' })
        }


        const [usuario] = rows;

        req.usuario = usuario;

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: `Erro interno: ${error.message}` })

    }

}

module.exports = {
    filtroAutenticacao
}