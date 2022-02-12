const {
    check,
    validationResult
} = require('express-validator');

let validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({
            success: false,
            error: errors.errors
        })
    } else {
        next();
    }
}
module.exports = {
    createUser: [
        check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Email address cannot be empty!')
        .bail()
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid email address!')
        .bail(),
        check('firstName')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('First Name can not be empty!')
        .bail()
        .isLength({
            min: 3
        })
        .withMessage('Minimum 3 characters required for First Name!')
        .bail(),
        check('lastName')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Last Name can not be empty!')
        .bail()
        .isLength({
            min: 3
        })
        .withMessage('Minimum 3 characters required for Last Name!')
        .bail(),
        (req, res, next) => {
            validateRequest(req, res, next);
        }
    ]
}