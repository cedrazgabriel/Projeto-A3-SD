const { body, validationResult } = require('express-validator');

const validateCategoria = [
    body('descricao').notEmpty().withMessage('Descrição não pode estar vazio')
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


module.exports = { validateCategoria, checkValidationResultCreate };

