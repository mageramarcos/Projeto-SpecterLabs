
# Projeto Specter Labs - Marcos




## Documentação da API

#### Banco de Dados

```http
  Você precisa criar um Banco de Dados PostgreSQL.
  Arquivo para crição se encontra na pasta banco de dados "db.sql".
  depois configure o arquivo conexao.js que esta na pasta banco de dados de acordo com sua conexão ao banco de dados.
```



#### Exemplos de requisição: 
## Rota: Criar Usuario


```javascript
// POST /usuario

{
	"nome": "magera",
	"email": "magera.marcos@gmail.com",
	"senha": "123"
}
```
#### Exemplos de resposta

```javascript

// HTTP Status 201

{
	"id": 1,
	"nome": "magera",
	"email": "magera.marcos@gmail.com"
}
```

```javascript

// HTTP Status 400

{
	"mensagem": "Email existente"
}
```

#### Exemplos de requisição: 
## Rota: Login



```javascript
// POST /login

{
	"email": "magera.marcos@gmail.com",
	"senha": "123"
}
```
#### Exemplos de resposta

```javascript

// HTTP Status 200

	"usuario": {
		"id": 1,
		"nome": "magera",
		"email": "magera.marcos@gmail.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzExNDg0ODI0LCJleHAiOjE3MTE1MTM2MjR9.xLuIxmr8h8_GiS4Oxr39s2UEhz2URNYu7rGjVRyn9Ns"
}
```

```javascript

// HTTP Status 400

{
	"mensage": "Email e senha estão incorretos"
}
```
#### Exemplos de requisição: 
## Rota: Cadastro de notas
----------Informar beare token na requisição


```javascript
// POST /notas

{
	"numero_nota": "123",
	"descricao": "Nota de Compra Azevedo Alimentos"
}
```
#### Exemplos de resposta

```javascript

// HTTP Status 201

{
	"id": 1,
	"usuario_id": 1,
	"numero_nota": "123",
	"descricao": "Nota de Compra Azevedo Alimentos"
}
```

```javascript

// HTTP Status 400

{
	"mensage": "Todos os campos são obrigatorios"
}
```
#### Exemplos de requisição: 
## Rota: Listar notas
----------Informar beare token na requisição

```javascript
// GET /notas

Sem corpo na requisição
```
#### Exemplos de resposta

```javascript

// HTTP Status 200

{
	"notas": [
		{
			"id": 1,
			"usuario_id": 1,
			"numero_nota": "123",
			"descricao": "Nota de Compra Azevedo Alimentos"
		}
	],
	"pagina_atual": 1,
	"total_notas": 1
}
```
#### Exemplos de requisição: 
## Rota: Atualizar notas
----------Informar beare token na requisição


```javascript   
// PUT /notas/ 'numero do id da nota aqui'

// Informar o id da nota depois da ultima barra da rota.


{
		"numero_nota": "1234",
		"descricao": "Nota Atualizada de Compra Azevedo Alimentos"
	}
```
#### Exemplos de resposta

```javascript

// HTTP Status 204

Sem corpo na resposta.
```

```javascript

// HTTP Status 404

{
	"mensagem": "A nota não existe"
}
```
#### Exemplos de requisição: 
## Rota: Exluir nota
----------Informar beare token na requisição


```javascript   
// DELETE /notas/ 'numero do id da nota aqui'

// Informar o id da nota depois da ultima barra da rota.


Sem corpo na requisição.
```
#### Exemplos de resposta

```javascript

// HTTP Status 204

Sem corpo na resposta.
```

```javascript

// HTTP Status 404

{
	"mensagem": "A nota não existe"
}
```
#### Exemplos de requisição: 
## Rota: Frase aleatoria (Api Random Quotes)



```javascript   
// GET /frase 


Sem corpo na requisição.
```
#### Exemplos de resposta

```javascript

// HTTP Status 200

{
	"frase": "What is a weed? A plant whose virtues have not yet been discovered."
}
```
