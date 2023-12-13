const { param, validationResult } = require('express-validator');

const validateGetById = [
    param('id').notEmpty().withMessage('ID não pode estar vazio').isUUID().withMessage('ID deve ser uma string do tipo uuid'),
];

const checkValidationResultId = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateGetById, checkValidationResultId };
