const axios = require('axios');

const obterFraseAleatoria = async (req, res) => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        const frase = response.data.content;
        res.json({ frase });
    } catch (error) {
        console.error('Erro ao obter a frase aleatória:', error.message);
        res.status(500).json({ mensagem: 'Erro ao processar a solicitação' });
    }
};

module.exports = { obterFraseAleatoria };