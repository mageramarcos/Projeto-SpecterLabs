const express = require('express');
const { criarUsuario } = require('./controladores/criarUsuarios');
const { login } = require('./controladores/login');
const { filtroAutenticacao } = require('./intermediarios/autenticacao');
const { listarNotas } = require('./controladores/listarNotas');
const { atualizarNota } = require('./controladores/atualizarNotas');
const { cadastrarNota } = require('./controladores/cadastroNotas');
const { excluirNota } = require('./controladores/excluirNotas');
const { obterFraseAleatoria } = require('./controladores/apiRandomQuotes');
const rotas = express();




rotas.get('/frase', obterFraseAleatoria);

rotas.post('/usuario', criarUsuario);

rotas.post('/login', login);

rotas.use(filtroAutenticacao);

rotas.get('/notas', listarNotas);
rotas.post('/notas', cadastrarNota);
rotas.put('/notas/:id', atualizarNota);
rotas.delete('/notas/:id', excluirNota);

module.exports = rotas;