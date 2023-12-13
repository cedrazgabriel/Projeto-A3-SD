const { body, validationResult } = require('express-validator');

const validateCliente = [
    body('nome').notEmpty().withMessage('Nome não pode estar vazio').isString().withMessage('Nome deve ser uma string'),
    body('sobrenome').notEmpty().withMessage('Sobrenome não pode estar vazio').isString().withMessage('Sobrenome deve ser uma string'),
    body('email').notEmpty().withMessage('Email não pode estar vazio').isEmail().withMessage('Por favor digite um e-mail válido'),
    body('endereco').notEmpty().withMessage('Endereço não pode estar vazio').isString().withMessage('Endereço deve ser uma string'),
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


module.exports = { validateCliente, checkValidationResultCreate };

