import express from 'express';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json' assert { type: 'json' };

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
