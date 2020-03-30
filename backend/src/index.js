//Importando o pacote express para a variável express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//Armazenando a aplicação, criando a aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Escutando porta
app.listen(3333);