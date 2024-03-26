const { query } = require('../banco de dados/conexao')
const bcrypt = require('bcrypt')

const criarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    try {
        const usuario = await query('select * from usuarios where email = $1', [email])

        if (usuario.rowCount > 0) {
            return res.status(400).json({ mensagem: 'Email existente' });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const queryCadastro = 'insert into usuarios (nome,email,senha) values ($1, $2, $3) returning *';
        const paramCadastro = [nome, email, senhaCriptografada]
        const ususarioCadastrado = await query(queryCadastro, paramCadastro);

        if (ususarioCadastrado.rowCount <= 0) {
            return res.status(500).json({ mensagem: `Erro interno: ${error.mensagem}` })
        }

        const { senha: _, ...cadastro } = ususarioCadastrado.rows[0]

        return res.status(201).json(cadastro);

    } catch (error) {
        return res.status(500).json({ mensagem: `Erro interno: ${error.message}` })
    }

}

module.exports = {
    criarUsuario
}