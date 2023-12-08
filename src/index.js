const express = require('express');
const cors = require('cors');

const clienteRoute = require('./routes/clienteRoutes.js');
const categoriaRoute = require('./routes/categoriaRoutes.js');
const produtoRoute = require('./routes/produtoRoutes.js');
const estoqueRoute = require('./routes/estoqueRoutes.js');
const vendaRoute = require('./routes/vendaRoutes.js');


const app = express();
const port = process.env.PORT || 3000;

// Adicione o middleware express.json() para o tratamento de requisições com corpo em JSON
app.use(express.json());

app.use(cors());

app.use('/clientes', clienteRoute);
app.use('/categorias', categoriaRoute);
app.use('/produtos', produtoRoute);
app.use('/estoque', estoqueRoute);
app.use('/vendas', vendaRoute);


// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
