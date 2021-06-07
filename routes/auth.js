const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { fieldValidation } = require('../middlewares/field-validation');

const router = Router();

router.post('/login', [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required').not().isEmpty(),
        fieldValidation
    ],
    login);

module.exports = router;