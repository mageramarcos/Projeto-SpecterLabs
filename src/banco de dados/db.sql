-- Criação da tabela de usuários
CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

-- Criação da tabela de notas relacionada aos usuários
CREATE TABLE notas(
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    numero_nota VARCHAR(20) NOT NULL,
    descricao TEXT
);