const express = require('express');

const router = express.Router();
const { AuthValidator } = require('../validators');
const { AuthController } = require('../controllers');
const { AuthServices } = require('../services');
const asyncError = require('../errors/asyncError');

router.post('/signup', [AuthValidator.createParentValidator], AuthController.create(AuthServices, asyncError));
router.post('/login', [AuthValidator.createParentValidator], AuthController.login(AuthServices, asyncError));

module.exports = router;
