const express = require('express');  // atribuindo o 'express' a uma variável

const server = express();  /* estamos instanciando a nossa aplicação, 
atribuindo a uma variável o resultado da chamada da função do 'express' */

server.use(express.json()); /* modulo para que o express entenda o json que
é passado no corpo da requisição (Request Body) ao se usar o POST ou o PUT */

const users = ['Pablo', 'Joao', 'Pedro'];

server.get('/users', (req, res) => { // get p/ listagem de todos os usuários
  return res.json(users);
})

server.get('/users/:index', (req, res) => { /* get p/ listagem do usuário 
  indicado */
  const { index } = req.params; /* '.params' informando que é a req está sendo 
  pêga a partir dos Query Params */
  return res.json(users[id]);  /* '.res' usado para enviar uma resposta para 
  o front-end */
})

server.post('/users', (req, res) => { // post p/ inserção de usuários
  const { name } = req.body; /* informando que é a req tem que ser pêga do 
  request body */

  users.push(name); // push destinado ao array "users"
  return res.json(users); // retorno do array
})

server.put('/users/:index', (req, res) => { // put p/ editar usuários
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name; // atribuindo ao index de indicado o novo nome
  return res.json(users);

})

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;

  users.splice(index, 1); /* 'splice' é usado para percorrer o array, e a
  partir de x (neste caso 'index), excluir y posições (neste caso '1') */

  return res.send; // retorna apenas um status code de que deu tudo certo
})

server.listen(3000);  /* o nosso servidor precisa ouvir alguma porta, neste 
caso ele está ouvindo a porta 3000. */

