const express = require('express');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const clienteRoute = require('./routes/clienteRoutes.js');
const categoriaRoute = require('./routes/categoriaRoutes.js');
const produtoRoute = require('./routes/produtoRoutes.js');
const estoqueRoute = require('./routes/estoqueRoutes.js');
const vendaRoute = require('./routes/vendaRoutes.js');
const relatorioRoute = require('./routes/relatorioRoutes.js');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Defina as opções do Swagger JSDoc
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Vendas (Sistemas Distribuídos)',
            version: '1.0.0',
        },
    },
    // Caminho para os arquivos de rota que você deseja documentar
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/clientes', clienteRoute);
app.use('/categorias', categoriaRoute);
app.use('/produtos', produtoRoute);
app.use('/estoque', estoqueRoute);
app.use('/vendas', vendaRoute);
app.use('/relatorios', relatorioRoute);

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
