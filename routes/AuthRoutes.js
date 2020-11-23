const express = require('express');

const router = express.Router();
const { AuthValidator } = require('../validators');
const { UserController } = require('../controllers');
const { AuthServices } = require('../services');

const asyncError = require('../errors/asyncError');

router.post('/signup', [AuthValidator.signup], UserController.create(AuthServices, asyncError));
router.post('/login', [AuthValidator.createParentValidator], UserController.login(AuthServices, asyncError));

module.exports = router;
