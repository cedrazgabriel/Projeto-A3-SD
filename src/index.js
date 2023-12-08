const express = require('express');
const cors = require('cors');
const clienteRoute = require('./routes/clienteRoutes.js');


const app = express();
const port = process.env.PORT || 3000;

// Adicione o middleware express.json() para o tratamento de requisições com corpo em JSON
app.use(express.json());

app.use(cors());

app.use('/clientes', clienteRoute);

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});