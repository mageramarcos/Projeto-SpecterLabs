const { Pool } = require('pg');


// CONFIGURE O BANCO DE ACORDO  COM SUAS CONFIGURAÇÕES.


const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'projetospecterlabs',
    user: 'postgres',
    password: 'suaSenhaAqui',
});

const query = (text, param) => {
    return pool.query(text, param);
}

module.exports = {
    query
}
