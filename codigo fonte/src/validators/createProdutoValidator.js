const { body, validationResult } = require('express-validator');

const validateProduto = [
    body('descricao').notEmpty().withMessage('Nome não pode estar vazio').isString().withMessage('Nome deve ser uma string'),
    body('valor').notEmpty().withMessage('Valor não pode estar vazio').isFloat({ min: 0.1 }).withMessage('Valor deve ser um número decimal e maior que zero'),
    body('categoriaId').notEmpty().withMessage('Categoria Id não pode estar vazio').isUUID().withMessage('Por favor digite um UUID válido'),
];

const checkValidationResultCreate = (req, res, next) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        }
        next();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = { validateProduto, checkValidationResultCreate };

