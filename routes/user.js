const { Router } = require('express');
const { check } = require('express-validator');

const { getUsers, postUsers, deleteUsers, putUsers } = require('../controllers/users');

const { fieldValidation } = require('../middlewares/field-validation');
const { emailExist } = require('../helpers/db-validators');
const { verifyJWT } = require('../middlewares/verify-jwt');

const router = Router();

router.put('/',[
    verifyJWT
],putUsers);

router.post('/', [
    check('email', 'Invalid email').isEmail(),
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required and 6 characters length min').isLength({min: 6}),
    check('email').custom(emailExist),
    fieldValidation

], postUsers);

router.delete('/', deleteUsers);

module.exports = router;